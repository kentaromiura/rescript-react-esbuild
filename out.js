(()=>{var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var s1=f(($e,r1)=>{"use strict";r1.exports=(e,t,n,r,c)=>{let a=n.length,i=t.length,s=a,o=0,d=0,u=null;for(;o<i||d<s;)if(i===o){let l=s<a?d?r(n[d-1],-0).nextSibling:r(n[s],0):c;for(;d<s;)e.insertBefore(r(n[d++],1),l)}else if(s===d)for(;o<i;)(!u||!u.has(t[o]))&&e.removeChild(r(t[o],-1)),o++;else if(t[o]===n[d])o++,d++;else if(t[i-1]===n[s-1])i--,s--;else if(t[o]===n[s-1]&&n[d]===t[i-1]){let l=r(t[--i],-0).nextSibling;e.insertBefore(r(n[d++],1),r(t[o++],-0).nextSibling),e.insertBefore(r(n[--s],1),l),t[i]=n[s]}else{if(!u){u=new Map;let l=d;for(;l<s;)u.set(n[l],l++)}if(u.has(t[o])){let l=u.get(t[o]);if(d<l&&l<s){let p=o,m=1;for(;++p<i&&p<s&&u.get(t[p])===l+m;)m++;if(m>l-d){let N=r(t[o],0);for(;d<l;)e.insertBefore(r(n[d++],1),N)}else e.replaceChild(r(n[d++],1),r(t[o++],-1))}else o++}else e.removeChild(r(t[o++],-1))}return n}});var E=f(g=>{"use strict";var{isArray:lt}=Array,{getPrototypeOf:at,getOwnPropertyDescriptor:ut}=Object;g.isArray=lt;var dt="http://www.w3.org/2000/svg";g.SVG_NAMESPACE=dt;var pt=[];g.empty=pt;var ht=()=>document.createRange();g.newRange=ht;var ft=(e,t,n)=>(e.set(t,n),n);g.set=ft;var mt=(e,t)=>{let n;do n=ut(e,t);while(!n&&(e=at(e)));return n};g.gPD=mt;var Et=(e,t)=>t.reduceRight(gt,e);g.find=Et;var gt=(e,t)=>e.childNodes[t]});var U=f(y=>{"use strict";y.ELEMENT_NODE=1;var yt=2;y.ATTRIBUTE_NODE=yt;var Mt=3;y.TEXT_NODE=Mt;var Nt=8;y.COMMENT_NODE=Nt;var Tt=9;y.DOCUMENT_NODE=Tt;var xt=10;y.DOCUMENT_TYPE_NODE=xt;var Ot=11;y.DOCUMENT_FRAGMENT_NODE=Ot});var o1=f((Ie,c1)=>{"use strict";var{setPrototypeOf:_t}=Object;c1.exports=e=>{function t(n){return _t(n,new.target.prototype)}return t.prototype=e.prototype,t}});var $=f((Pe,i1)=>{"use strict";var{newRange:wt}=E(),T;i1.exports=(e,t,n)=>(T||(T=wt()),n?T.setStartAfter(e):T.setStartBefore(e),T.setEndAfter(t),T.deleteContents(),e)});var P=f(I=>{"use strict";var{DOCUMENT_FRAGMENT_NODE:zt}=U(),bt=(e=>e.__esModule?e.default:e)(o1()),vt=$(),{empty:l1}=E(),L=({firstChild:e,lastChild:t},n)=>vt(e,t,n),u1=!1,Ct=(e,t)=>u1&&e.nodeType===zt?1/t<0?t?L(e,!0):e.lastChild:t?e.valueOf():e.firstChild:e;I.diffFragment=Ct;var a1=e=>document.createComment(e),R=class extends bt(DocumentFragment){#e=a1("<>");#n=a1("</>");#t=l1;constructor(t){super(t),this.replaceChildren(this.#e,...t.childNodes,this.#n),u1=!0}get firstChild(){return this.#e}get lastChild(){return this.#n}get parentNode(){return this.#e.parentNode}remove(){L(this,!1)}replaceWith(t){L(this,!0).replaceWith(t)}valueOf(){let{parentNode:t}=this;if(t===this)this.#t===l1&&(this.#t=[...this.childNodes]);else{if(t){let{firstChild:n,lastChild:r}=this;for(this.#t=[n];n!==r;)this.#t.push(n=n.nextSibling)}this.replaceChildren(...this.#t)}return this}};I.PersistentFragment=R});var w=f(h=>{"use strict";var At=(e=>e.__esModule?e.default:e)(s1()),{empty:qt,gPD:Dt,isArray:St,set:kt}=E(),{diffFragment:F}=P(),Ht=$(),d1=(e,t,n)=>e.setAttribute(t,n),A=(e,t)=>e.removeAttribute(t);h.removeAttribute=A;var p1=(e,t)=>{for(let n in t){let r=t[n],c=n==="role"?n:`aria-${n}`;r==null?A(e,c):d1(e,c,r)}return t};h.aria=p1;var C,h1=(e,t,n)=>{n=n.slice(1),C||(C=new WeakMap);let r=C.get(e)||kt(C,e,{}),c=r[n];return c&&c[0]&&e.removeEventListener(n,...c),c=St(t)?t:[t,!1],r[n]=c,c[0]&&e.addEventListener(n,...c),t};h.at=h1;var Ut=(e,t)=>{let{t:n,n:r}=e,c=!1;switch(typeof t){case"object":if(t!==null){(r||n).replaceWith(e.n=t.valueOf());break}case"undefined":c=!0;default:n.data=c?"":t,r&&(e.n=null,r.replaceWith(n));break}return t};h.hole=Ut;var f1=(e,t)=>q(e,t,t==null?"class":"className");h.className=f1;var m1=(e,t)=>{let{dataset:n}=e;for(let r in t)t[r]==null?delete n[r]:n[r]=t[r];return t};h.data=m1;var _=(e,t,n)=>e[n]=t;h.direct=_;var E1=(e,t,n)=>_(e,t,n.slice(1));h.dot=E1;var q=(e,t,n)=>t==null?(A(e,n),t):_(e,t,n);h.maybeDirect=q;var W=(e,t)=>(typeof t=="function"?t(e):t.current=e,t);h.ref=W;var V=(e,t,n)=>(t==null?A(e,n):d1(e,n,t),t),g1=(e,t)=>t==null?q(e,t,"style"):_(e.style,t,"cssText");h.style=g1;var y1=(e,t,n)=>(e.toggleAttribute(n.slice(1),t),t);h.toggle=y1;var $t=(e,t,n)=>{let{length:r}=t;if(e.data=`[${r}]`,r)return At(e.parentNode,n,t,F,e);switch(n.length){case 1:n[0].remove();case 0:break;default:Ht(F(n[0],0),F(n.at(-1),-0),!1);break}return qt};h.array=$t;var M1=new Map([["aria",p1],["class",f1],["data",m1],["ref",W],["style",g1]]);h.attr=M1;var Lt=(e,t,n)=>{switch(t[0]){case".":return E1;case"?":return y1;case"@":return h1;default:return n||"ownerSVGElement"in e?t==="ref"?W:V:M1.get(t)||(t in e?t.startsWith("on")?_:Dt(e,t)?.set?q:V:V)}};h.attribute=Lt;var Rt=(e,t)=>(e.textContent=t??"",t);h.text=Rt});var x=f(z=>{"use strict";var{empty:N1}=E(),T1=(e,t,n)=>({a:e,b:t,c:n});z.abc=T1;var It=(e,t)=>({b:e,c:t});z.bc=It;var Pt=(e,t,n,r)=>({v:N1,u:e,t,n,c:r});z.detail=Pt;var Ft=()=>T1(null,null,N1);z.cache=Ft});var _1=f((Be,O1)=>{"use strict";var{PersistentFragment:Vt}=P(),{bc:Wt,detail:Bt}=x(),{array:Gt,hole:jt}=w(),{empty:x1,find:Xt}=E(),{cache:Yt}=x();O1.exports=e=>(t,n)=>{let{a:r,b:c,c:a}=e(t,n),i=document.importNode(r,!0),s=x1;if(c!==x1){s=[];for(let o,d,u=0;u<c.length;u++){let{a:l,b:p,c:m}=c[u],N=l===d?o:o=Xt(i,d=l);s[u]=Bt(p,N,m,p===Gt?[]:p===jt?Yt():null)}}return Wt(a?i.firstChild:new Vt(i),s)}});var G=f(B=>{"use strict";var Zt=/^(?:plaintext|script|style|textarea|title|xmp)$/i;B.TEXT_ELEMENTS=Zt;var Jt=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;B.VOID_ELEMENTS=Jt});var z1=f((je,w1)=>{"use strict";var{VOID_ELEMENTS:Kt}=G(),Qt=/<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g,te=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,ee=/[\x01\x02]/g;w1.exports=(e,t,n)=>{let r=0;return e.join("").trim().replace(Qt,(c,a,i,s)=>`<${a}${i.replace(te,"=$2$1").trimEnd()}${s?n||Kt.test(a)?" /":`></${a}`:""}>`).replace(ee,c=>c===""?`<!--${t+r++}-->`:t+r++)}});var v1=f((Xe,b1)=>{"use strict";var{SVG_NAMESPACE:ne,newRange:re}=E(),D=document.createElement("template"),j,X;b1.exports=(e,t)=>{if(t)return j||(j=document.createElementNS(ne,"svg"),X=re(),X.selectNodeContents(j)),X.createContextualFragment(e);D.innerHTML=e;let{content:n}=D;return D=D.cloneNode(!1),n}});var S1=f((Ye,D1)=>{"use strict";var{COMMENT_NODE:se,ELEMENT_NODE:ce}=U(),{TEXT_ELEMENTS:oe}=G(),ie=(e=>e.__esModule?e.default:e)(z1()),{empty:le,isArray:ae,set:ue}=E(),{abc:S}=x(),{array:de,attribute:pe,hole:C1,text:he,removeAttribute:fe}=w(),me=v1(),Y=e=>{let t=[],n;for(;n=e.parentNode;)t.push(t.indexOf.call(n.childNodes,e)),e=n;return t},A1=()=>document.createTextNode(""),Ee=(e,t,n)=>{let r=me(ie(e,b,n),n),{length:c}=e,a=le;if(c>1){let o=[],d=document.createTreeWalker(r,129),u=0,l=`${b}${u++}`;for(a=[];u<c;){let p=d.nextNode();if(p.nodeType===se){if(p.data===l){let m=ae(t[u-1])?de:C1;m===C1&&o.push(p),a.push(S(Y(p),m,null)),l=`${b}${u++}`}}else{let m;for(;p.hasAttribute(l);){m||(m=Y(p));let N=p.getAttribute(l);a.push(S(m,pe(p,N,n),N)),fe(p,l),l=`${b}${u++}`}!n&&oe.test(p.localName)&&p.textContent.trim()===`<!--${l}-->`&&(a.push(S(m||Y(p),he,null)),l=`${b}${u++}`)}}for(u=0;u<o.length;u++)o[u].replaceWith(A1())}let{childNodes:i}=r,{length:s}=i;return s<1?(s=1,r.appendChild(A1())):s===1&&c!==1&&i[0].nodeType!==ce&&(s=0),ue(q1,e,S(r,a,s===1))},q1=new WeakMap,b="is\xB5";D1.exports=e=>(t,n)=>q1.get(t)||Ee(t,n,e)});var R1=f(L1=>{"use strict";var{array:k1,hole:H1}=w(),{cache:Z}=x(),U1=_1(),$1=S1(),ge=U1($1(!1)),ye=U1($1(!0)),J=(e,{s:t,t:n,v:r})=>{if(e.a!==n){let{b:c,c:a}=(t?ye:ge)(n,r);e.a=n,e.b=c,e.c=a}for(let{c}=e,a=0;a<c.length;a++){let i=r[a],s=c[a];switch(s.u){case k1:s.v=k1(s.t,Me(s.c,i),s.v);break;case H1:let o=i instanceof v?J(s.c||(s.c=Z()),i):(s.c=null,i);o!==s.v&&(s.v=H1(s,o));break;default:i!==s.v&&(s.v=s.u(s.t,i,s.n,s.v));break}}return e.b},Me=(e,t)=>{let n=0,{length:r}=t;for(r<e.length&&e.splice(r);n<r;n++){let c=t[n];c instanceof v?t[n]=J(e[n]||(e[n]=Z()),c):e[n]=null}return t},v=class{constructor(t,n,r){this.s=t,this.t=n,this.v=r}toDOM(t=Z()){return J(t,this)}};L1.Hole=v});var F1=f((Je,P1)=>{"use strict";var{cache:Ne}=x(),{set:Te}=E(),I1=new WeakMap;P1.exports=(e,t)=>{let n=I1.get(e)||Te(I1,e,Ne()),{b:r}=n;return r!==(typeof t=="function"?t():t).toDOM(n)&&e.replaceChildren(n.b.valueOf()),e}});var B1=f(O=>{"use strict";var{Hole:V1}=R1(),{attr:xe}=w(),Oe=F1(),W1=e=>(t,...n)=>new V1(e,t,n),_e=W1(!1);O.html=_e;var we=W1(!0);O.svg=we;O.Hole=V1;O.render=Oe;O.attr=xe});var{render:ze,html:K,svg:G1}=B1(),Q=e=>(t,n)=>ze(e,K(t,...n)),j1=(e,t)=>(n,r)=>{let c=document.createElement(e);return c.className=t,Q(c)(n,r)};var t1=function(e,t){var n,r;r=t.length;var c=[];for(n=0;n<r-1;++n)c.push(t[n]);var a=t[r-1];for(n=0;n<a.length;++n)c.push(a[n]);return e.apply(null,c)};function M(e,t){return t1(K,[e,t])}function X1(e,t){return t1(G1,[e,t])}function Y1(e){return Q(e)}function e1(e,t){return j1(e,t)}var J1=X1([`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="768.000000pt" viewBox="0 0 1024.000000 768.000000"
 preserveAspectRatio="xMidYMid meet" class="`,`">
<g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 3840 l0 -3840 5120 0 5120 0 0 3840 0 3840 -5120 0 -5120 0 0
-3840z m9609 3166 c18 -13 59 -57 91 -98 48 -60 73 -81 141 -118 45 -25 96
-62 114 -82 30 -36 93 -173 83 -183 -2 -2 -40 14 -84 36 -69 35 -85 40 -133
36 -46 -3 -58 -9 -82 -37 -16 -18 -29 -36 -29 -41 0 -5 -8 -5 -17 -2 -16 6
-16 5 -4 -10 13 -16 12 -17 -10 -8 -14 5 -46 8 -73 7 -26 -1 -50 2 -52 6 -3 5
-10 5 -16 2 -13 -8 -106 -9 -115 -1 -3 4 -13 1 -21 -6 -13 -10 -14 -9 -7 3 8
13 7 13 -8 1 -11 -8 -17 -9 -17 -3 0 6 -6 9 -12 7 -34 -12 -68 -13 -68 -2 0 7
-4 6 -10 -3 -8 -12 -10 -12 -11 5 0 11 -3 14 -6 7 -2 -6 -9 -10 -14 -6 -5 3
-9 -1 -9 -8 0 -9 -3 -9 -10 2 -5 8 -10 10 -10 4 0 -6 -7 -11 -15 -11 -8 0 -15
6 -15 14 0 16 -16 17 -26 1 -4 -7 -3 -8 4 -4 7 4 12 3 12 -2 0 -6 -16 -12 -35
-14 -33 -4 -34 -3 -17 16 12 14 13 17 2 11 -33 -20 -51 -12 -118 53 -101 98
-100 92 -39 203 29 53 76 119 107 151 l56 58 -30 0 c-16 0 -27 3 -23 6 3 3 63
6 134 6 70 0 155 6 188 13 100 22 166 19 204 -9z m-683 -88 c-45 -46 -87 -92
-94 -103 -11 -17 -11 -17 -1 5 11 24 158 180 169 180 4 0 -30 -37 -74 -82z
m-136 -188 c-11 -22 -23 -40 -25 -40 -3 0 4 18 15 40 11 22 23 40 25 40 3 0
-4 -18 -15 -40z m-60 -110 c-11 -22 -23 -40 -25 -40 -3 0 4 18 15 40 11 22 23
40 25 40 3 0 -4 -18 -15 -40z m-140 -364 c0 -2 -8 -10 -17 -17 -16 -13 -17
-12 -4 4 13 16 21 21 21 13z m851 -53 c13 -16 12 -17 -3 -4 -10 7 -18 15 -18
17 0 8 8 3 21 -13z m-891 3 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16
21 21 21 13z m960 -106 c6 -11 8 -20 6 -20 -3 0 -10 9 -16 20 -6 11 -8 20 -6
20 3 0 10 -9 16 -20z m-1005 -815 c634 -212 1053 -288 1174 -214 18 11 38 34
46 52 14 31 14 30 17 -48 3 -138 -3 -404 -13 -550 -28 -381 -81 -601 -249
-1022 -67 -167 -89 -207 -407 -740 -185 -310 -339 -563 -343 -563 -4 0 -1 30
6 68 19 96 19 96 -17 75 -26 -15 -51 -43 -131 -149 -10 -13 80 -36 432 -109
196 -41 198 -42 217 -78 9 -18 16 -38 14 -46 -1 -7 2 -10 8 -6 6 3 11 1 11 -4
0 -15 -13 -14 -29 2 -10 10 -11 9 -6 -4 5 -14 0 -16 -30 -13 -25 2 -34 0 -30
-9 4 -7 0 -3 -9 7 -8 10 -14 22 -11 25 2 4 -6 8 -17 8 -19 2 -19 1 -3 -11 14
-10 15 -15 5 -21 -7 -4 -16 -2 -20 5 -6 9 -12 9 -29 1 -25 -14 -28 -26 -4 -17
10 4 14 3 9 -1 -11 -12 -55 -11 -53 1 3 15 -36 13 -49 -3 -9 -11 -11 -11 -11
3 0 9 5 17 11 17 6 1 18 2 26 3 8 1 21 -3 28 -8 7 -5 12 -4 12 3 0 11 -3 12
-50 15 -14 0 -31 5 -37 9 -9 6 -11 3 -7 -7 3 -9 1 -16 -5 -16 -6 0 -11 7 -11
16 0 8 -4 13 -9 9 -5 -3 -16 1 -24 10 -13 13 -15 12 -20 -5 -3 -11 -1 -18 3
-15 11 7 40 -5 40 -15 0 -5 -8 -7 -17 -6 -10 2 -30 -1 -45 -6 -21 -8 -33 -5
-57 13 -25 18 -33 20 -45 10 -13 -11 -16 -9 -22 13 -3 14 -10 23 -15 21 -4 -3
-6 -12 -2 -20 3 -8 0 -15 -7 -15 -6 0 -8 -5 -5 -10 4 -6 10 -8 15 -5 5 3 11 1
14 -3 3 -5 -5 -9 -17 -8 -16 1 -22 7 -21 24 0 12 -2 20 -4 17 -3 -3 -14 3 -24
12 -18 16 -19 16 -12 -3 5 -16 4 -15 -10 4 -10 12 -21 20 -26 17 -5 -3 -17 -1
-27 4 -34 19 -148 59 -185 66 -41 8 -98 -11 -98 -32 0 -7 -4 -13 -9 -13 -5 0
-11 -12 -13 -28 -2 -21 -8 -27 -25 -25 -13 2 -23 -2 -23 -7 0 -6 -9 -10 -19
-10 -11 0 -22 -3 -24 -7 -3 -5 8 -8 24 -8 16 0 29 5 29 12 0 7 6 10 13 7 7 -2
13 -13 13 -24 0 -11 -4 -16 -11 -11 -5 4 -31 7 -57 7 -25 -1 -44 2 -41 6 2 5
-1 8 -7 8 -6 0 -8 4 -5 10 3 6 -1 7 -9 4 -9 -3 -13 -10 -10 -15 3 -5 0 -9 -5
-9 -6 0 -11 4 -11 8 0 5 -7 9 -15 9 -8 0 -13 -3 -11 -6 2 -3 -3 -13 -12 -21
-14 -13 -15 -13 -10 1 3 9 2 22 -3 30 -7 11 -9 10 -9 -6 0 -11 -4 -15 -8 -10
-4 6 -25 11 -47 12 -23 0 -44 7 -49 16 -8 13 -13 11 -30 -11 -12 -15 -20 -29
-19 -33 1 -3 -4 -6 -12 -6 -8 0 -12 4 -9 9 3 4 0 8 -6 8 -6 0 -8 5 -4 11 4 8
9 7 16 -2 8 -12 9 -12 6 0 -2 8 -14 21 -25 28 -20 13 -21 13 -19 -12 2 -14 -1
-28 -5 -31 -5 -3 -9 1 -9 9 0 8 -7 17 -15 21 -8 3 -15 12 -15 21 0 8 -5 15
-11 15 -5 0 -7 -5 -4 -10 9 -14 -16 -35 -42 -36 -22 -1 -28 8 -23 31 1 5 -8 1
-19 -9 -12 -11 -21 -14 -21 -8 0 16 -38 10 -45 -6 -3 -10 0 -12 10 -8 9 3 15
0 15 -9 0 -8 5 -15 11 -15 5 0 7 5 4 10 -3 6 -1 10 4 10 6 0 11 -7 11 -15 0
-19 -19 -19 -44 0 -10 8 -23 12 -28 8 -6 -3 -5 5 2 17 9 17 9 25 0 34 -8 8
-10 7 -5 -7 8 -19 2 -21 -24 -8 -13 8 -18 6 -18 -5 0 -8 5 -13 12 -11 6 3 11
-3 11 -12 0 -11 -10 -17 -36 -18 -19 -1 -28 1 -20 5 27 12 19 37 -11 37 -22 1
-26 -2 -17 -12 8 -10 3 -13 -21 -13 -18 0 -30 -3 -28 -7 3 -5 -6 -9 -19 -9
-27 -2 -26 -2 -18 20 3 9 11 13 18 9 6 -3 3 3 -7 14 -9 11 -14 23 -10 28 5 4
2 5 -5 1 -9 -5 -10 -12 -3 -20 13 -16 0 -34 -21 -30 -10 1 -18 -2 -18 -8 0 -7
-5 -6 -14 1 -7 6 -27 10 -43 9 -24 -2 -29 -6 -25 -21 4 -17 3 -18 -16 -6 -11
7 -18 17 -16 21 3 4 -6 4 -20 -2 -14 -5 -26 -7 -26 -4 0 4 -6 1 -14 -5 -10 -9
-16 -8 -25 3 -10 12 -8 14 11 10 13 -3 6 3 -14 12 -21 9 -36 20 -33 24 6 10
-22 7 -32 -4 -4 -4 -3 -7 2 -5 14 3 45 -12 45 -22 0 -5 -7 -9 -15 -9 -8 0 -15
5 -15 11 0 6 -6 9 -12 6 -7 -2 -12 -13 -10 -23 2 -15 1 -16 -7 -5 -5 8 -7 20
-4 28 3 7 0 13 -7 13 -6 0 -9 -4 -6 -8 3 -5 -4 -16 -15 -25 -10 -9 -19 -13
-19 -8 0 5 -9 7 -20 4 -11 -3 -20 -1 -20 5 0 6 -8 9 -17 7 -10 -1 -13 0 -6 2
13 5 26 33 18 41 -3 3 -5 0 -5 -6 0 -7 -4 -12 -10 -12 -5 0 -10 21 -10 46 0
71 -19 93 -125 143 l-94 43 -136 -26 c-160 -31 -325 -43 -685 -51 -439 -9
-572 -28 -753 -109 -32 -15 -63 -23 -69 -20 -7 4 -8 2 -4 -4 7 -12 -10 -17
-47 -14 -12 1 -16 -2 -11 -10 5 -8 2 -9 -9 -5 -9 3 -16 3 -16 -1 3 -21 -3 -24
-15 -6 -8 10 -18 16 -22 12 -4 -4 -1 -14 5 -22 10 -12 9 -15 -11 -14 -31 2
-48 16 -41 35 4 11 3 14 -6 9 -7 -5 -10 -15 -7 -23 7 -16 -10 -43 -25 -43 -5
0 -9 4 -9 10 0 5 5 9 11 7 6 -1 14 5 17 13 4 11 0 11 -21 -3 -15 -10 -27 -13
-27 -8 0 5 5 13 10 16 6 4 7 12 3 18 -5 9 -3 9 8 0 12 -9 14 -6 14 18 0 16 -1
29 -3 29 -1 0 -19 -7 -38 -15 -20 -8 -41 -12 -47 -8 -6 4 -7 1 -2 -7 6 -10 4
-12 -8 -7 -10 4 -17 2 -17 -4 0 -6 -9 -9 -20 -6 -11 3 -20 0 -20 -6 0 -7 -5
-5 -10 3 -8 13 -10 12 -10 -2 0 -10 -2 -18 -4 -18 -2 0 -13 -3 -23 -6 -15 -5
-15 -4 -3 5 13 9 13 11 -2 11 -10 0 -18 -4 -18 -10 0 -14 -37 -13 -46 1 -4 8
1 9 17 4 23 -7 23 -7 6 12 -9 11 -14 24 -10 28 5 5 0 4 -9 -3 -9 -8 -15 -22
-13 -32 5 -24 -11 -36 -19 -15 -4 13 -10 14 -26 5 -11 -6 -20 -8 -20 -4 0 3
-8 0 -17 -7 -12 -10 -14 -10 -9 -1 4 7 1 15 -8 18 -9 3 -13 10 -10 15 3 5 1 9
-5 9 -5 0 -14 -7 -19 -16 -7 -12 -11 -13 -17 -5 -5 9 -11 7 -21 -6 -14 -17
-14 -17 -12 2 2 11 8 23 13 27 6 5 5 8 -3 8 -8 0 -16 -8 -19 -18 -6 -25 -36
-42 -62 -35 -22 6 -28 27 -11 38 6 3 7 -1 4 -9 -3 -9 -1 -16 4 -16 23 0 20 18
-6 41 -15 13 -21 17 -15 10 9 -11 10 -18 2 -28 -16 -18 -26 -16 -32 7 -3 11
-11 20 -17 20 -10 0 -9 -4 0 -15 10 -12 10 -19 2 -27 -7 -7 -12 -8 -12 -3 0 4
-9 0 -20 -10 -19 -17 -21 -17 -46 0 -15 9 -23 12 -20 6 4 -6 3 -11 -3 -11 -5
0 -11 6 -14 13 -3 8 -10 6 -22 -8 -9 -11 -14 -14 -10 -7 4 7 0 12 -9 12 -8 0
-16 7 -18 17 -2 10 -13 17 -30 17 -14 1 -24 -2 -22 -6 3 -4 12 -8 21 -8 29 0
4 -13 -27 -14 -20 -1 -30 4 -30 14 0 13 -2 13 -9 1 -5 -8 -7 -20 -4 -28 7 -17
-2 -17 -31 2 -12 8 -34 16 -49 17 -15 1 -27 6 -27 10 0 4 -9 12 -20 18 -14 7
-20 7 -20 0 0 -5 8 -10 18 -11 13 0 12 -2 -5 -9 -13 -5 -23 -12 -23 -14 0 -3
7 -3 15 0 20 8 48 -3 40 -16 -5 -8 -12 -7 -23 2 -13 11 -14 11 -8 0 7 -12 4
-12 -14 -2 -16 9 -25 9 -33 1 -17 -17 -27 -13 -27 10 0 11 -5 17 -10 14 -6 -4
-8 -10 -6 -14 3 -4 0 -13 -5 -21 -7 -11 -8 -7 -5 13 3 16 11 36 18 45 10 13 8
13 -9 -1 -20 -18 -21 -18 -37 5 -9 12 -16 17 -16 11 0 -6 7 -16 15 -23 19 -16
19 -26 1 -33 -10 -4 -13 -1 -10 7 3 7 -1 18 -8 24 -14 11 -17 3 -18 -53 -1
-11 -4 -15 -8 -9 -4 6 -16 10 -27 10 -11 -1 -28 6 -38 16 -9 10 -13 18 -7 18
5 0 10 5 10 10 0 7 -6 7 -20 0 -18 -10 -24 -7 -21 13 1 8 -13 9 -22 1 -3 -3 3
-15 14 -27 20 -22 27 -49 7 -29 -7 7 -22 12 -35 12 -13 0 -23 5 -23 10 0 6 4
10 10 10 5 0 6 7 3 17 -4 10 -2 14 4 10 6 -4 16 -1 22 7 6 7 30 21 53 31 24
11 138 65 253 122 116 56 228 109 250 117 22 8 253 104 513 213 l473 199 305
280 304 279 219 280 c208 266 234 295 528 586 298 296 319 314 653 575 292
229 396 302 690 491 211 137 351 221 360 217 8 -3 128 -43 265 -89z m-4916
-3348 c0 -8 -2 -8 -6 1 -4 10 -9 9 -24 -4 -23 -21 -26 -12 -3 10 16 17 35 13
33 -7z m4259 -1 c-2 -1 -10 -7 -19 -14 -14 -10 -16 -9 -14 10 3 32 3 32 20 18
9 -7 14 -13 13 -14z m127 4 c-3 -4 4 -6 15 -3 21 5 28 -11 10 -22 -6 -4 -7
-11 -4 -17 4 -5 -5 -3 -18 6 -14 9 -28 13 -33 9 -4 -5 -6 -3 -3 2 3 6 8 18 11
28 4 10 11 15 17 12 6 -4 8 -10 5 -15z m-3428 -15 c-9 -7 -13 -16 -9 -21 4 -4
0 -3 -9 4 -9 6 -19 8 -24 4 -4 -4 -6 0 -3 8 3 8 10 15 16 15 5 0 14 3 18 7 4
4 11 5 17 1 6 -4 4 -11 -6 -18z m-542 5 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10
0 6 2 10 4 10 3 0 8 -4 11 -10z m372 4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11
1 17 -2 13 -5z m-309 -17 c15 9 19 8 19 -3 0 -8 -2 -12 -5 -9 -3 2 -13 0 -23
-5 -12 -7 -20 -7 -24 0 -4 6 -12 7 -18 3 -7 -4 -6 1 2 11 11 13 16 14 22 4 7
-10 13 -10 27 -1z m47 3 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10
3 0 8 -4 11 -10z m3635 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10
10 6 0 10 -4 10 -10z m950 4 c0 -8 -19 -13 -24 -6 -3 5 1 9 9 9 8 0 15 -2 15
-3z m-5203 -18 c0 -8 -6 -12 -15 -9 -11 5 -11 7 0 14 7 5 13 9 14 9 0 0 1 -6
1 -14z m5402 0 c11 -14 6 -15 -27 -7 -4 1 8 21 12 21 2 0 9 -6 15 -14z m61 10
c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m-4073 -21 c0 -8 -4
-15 -9 -15 -10 0 -11 14 -1 23 9 10 10 9 10 -8z m2400 -21 c-3 -3 -12 -4 -19
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"/>
<path d="M4085 1990 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
<path d="M7987 1979 c12 -12 24 -21 27 -18 2 2 -8 13 -22 23 l-27 19 22 -24z"/>
<path d="M3733 1983 c-13 -2 -23 -9 -23 -14 0 -6 5 -7 12 -3 8 5 9 0 6 -14 -4
-12 -2 -20 2 -17 5 3 10 2 13 -2 2 -5 2 -2 0 5 -1 7 2 22 7 33 6 10 9 18 8 18
-2 -1 -13 -4 -25 -6z"/>
<path d="M3997 1979 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"/>
<path d="M4515 1980 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
<path d="M8985 1980 c-3 -5 3 -10 14 -10 12 0 21 5 21 10 0 6 -6 10 -14 10 -8
0 -18 -4 -21 -10z"/>
<path d="M9052 1982 c-9 -6 -6 -12 13 -22 14 -7 28 -10 32 -6 4 4 -3 9 -15 13
-12 3 -19 9 -16 14 6 11 3 11 -14 1z"/>
<path d="M4031 1964 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M4303 1959 c-2 -23 3 -25 10 -4 4 8 3 16 -1 19 -4 3 -9 -4 -9 -15z"/>
<path d="M4614 1969 c-3 -6 -14 -9 -24 -6 -12 3 -17 0 -14 -8 7 -16 51 -7 51
11 0 17 -4 18 -13 3z"/>
<path d="M7253 1958 c-2 -16 1 -17 13 -8 17 15 17 17 1 23 -8 3 -14 -3 -14
-15z"/>
<path d="M7325 1970 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M8866 1958 c-11 -15 -15 -17 -12 -6 3 12 1 15 -9 12 -16 -7 -9 -34 9
-34 7 0 18 11 24 25 14 31 10 32 -12 3z"/>
<path d="M4180 1960 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M4242 1965 c3 -3 16 -8 28 -10 12 -2 20 -1 16 2 -4 4 -16 8 -28 10
-12 2 -19 1 -16 -2z"/>
<path d="M8195 1960 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"/>
<path d="M3875 1949 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
<path d="M7050 1948 c0 -3 9 -6 20 -5 11 1 20 5 20 9 0 3 -9 6 -20 5 -11 -1
-20 -5 -20 -9z"/>
</g>
</svg>`],["css-9cra9q"]);function K1(e,t,n){return M([`
    `,"","",""],[e,t,n])}var Q1=M(["<ul>","</ul>"],[[M(["<li>String are of course ","</li>"],["possible"]),M(["<li>Int are strongly typed: ","</li>"],[1]),M(["<li>Floats are also ok ","</li>"],[1.03]),M(["<li>it allows for empty elements like ","</li>"],[void 0])]]),tt=e1("header","css-uas55h"),et=e1("content","css-1rb69z7"),nt=M(['<footer class="','"><img class=',' src="logo-index.png" /></footer>'],["css-1s7arrs","css-fboqxt"]);function k(e){return e.contents}function rt(e){return e.join(" ")}function qe(e){return{kind:e}}var st={ofType:qe},n1={iterations:0,name:"world"},H={contents:n1};function ct(e,t){return H.contents={iterations:e.iterations+1|0,name:"updated \u4E16\u754C"},H.contents}var ot={contents:void 0};function it(e,t){t(["",""],[K1(tt(["Rescript + uhtml"],[]),et(['<div class="','" onclick=',`>
         Hello, `,", clicked: ",` times.
         `,`
        </div>`],["css-1wjcx6y",ke,e.name,e.iterations,[Q1,J1]]),nt)])}function Se(e){var t=k(ot),n=ct(k(H),e);t!==void 0&&it(n,t)}function ke(){Se(st.ofType("Update"))}function He(){var e=Y1(document.getElementById("root"));ot.contents=e,it(n1,e)}window.onload=He;var Qe=k,t0=rt;})();
/*! Bundled license information:

uhtml/cjs/index.js:
  (*! (c) Andrea Giammarchi - MIT *)
*/
