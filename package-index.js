const { createHmac } = require('node:crypto');
const secret = 'abcdefg'; // not important

// From my 2014 Facebook interview submission (lol): https://github.com/kentaromiura/FBCalendar/blob/master/buildindex/build.js
var jsdom = require('jsdom'),
    fs = require('fs'),
    path = require('path')

    var { JSDOM } = jsdom;
    var { window } = new JSDOM();
    var html = fs.readFileSync('index.html')
    var { document } = new JSDOM(html).window;

    global.window = window
    global.document = document

    global.window.nodeType = 'window'
    var $ = require('elements');

const CleanCSS = require('clean-css');

function traverse(node, callback) {
  callback(node)
  var children = $(node.children)
  if (children) children.forEach(function(child) {
    traverse(child, callback)
  })
}

function script(script, relativePath) {
  if (script.nodeName === 'SCRIPT') {
    if (script.hasAttribute('src')){
        var content = '' + fs.readFileSync(path.normalize(relativePath + script.getAttribute(
        'src')))
        script.removeAttribute('src')
        script.setAttribute('type', 'text/javascript')
        script.textContent = content
    }
    if (!globalThis.isDev) {
        if (script.hasAttribute('id') && script.getAttribute('id') === 'livereload') {
            let empty = document.createTextNode('')
            script.parentNode.replaceChild(empty, script)
        }
    }
  }

}

function styleSheet(node, relativePath) {
    if (node.nodeName === 'LINK' && node.hasAttribute('rel') && node.getAttribute('rel') == 'stylesheet') {
        if (node.hasAttribute('href')){
            var content = '' + fs.readFileSync(path.normalize(relativePath + node.getAttribute(
            'href')))
            var newNode = document.createElement('style')
            newNode.textContent = new CleanCSS({
                level: {
                  2: {
                    mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
                    mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
                    mergeMedia: true, // controls `@media` merging; defaults to true
                    mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
                    mergeSemantically: false, // controls semantic merging; defaults to false
                    overrideProperties: true, // controls property overriding based on understandability; defaults to true
                    removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
                    reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
                    removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
                    removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
                    removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
                    removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
                    restructureRules: false, // controls rule restructuring; defaults to false
                    skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
                  }
                }
              }).minify(content).styles
            node.parentNode.replaceChild(newNode, node)
        }
      }
}

function parseHTML(html, relativePath, after) {
    traverse(globalThis.document.documentElement, function(each) {
        script(each, relativePath)
        styleSheet(each, relativePath)
      })
    after(globalThis.document)
}

function start(argv) {

  globalThis.isDev = argv[2] && argv[2] == 'dev'

  relativePath = './'
  
  parseHTML(html, relativePath, function(document) {
    const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
    fs.writeFileSync('.HASH', hash);
    console.log(`<!DOCTYPE html>${document.documentElement.outerHTML}`)
  })
}

start(process.argv)