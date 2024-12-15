const fs = require('fs');
const unwrapTagged = require('./babel.transform.unwrap.js')
const babel = require('@babel/core');
const input = fs.readFileSync('./out.js')
const output = babel.transform(input, {
    filename: 'out.js',
    plugins: [unwrapTagged],
    retainLines: true
}).code;
fs.writeFileSync('./out.js', output, 'utf-8');