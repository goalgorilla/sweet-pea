!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("del")},function(e,t){e.exports=require("glob")},function(e,t){e.exports=require("uglify-js")},function(e,t){e.exports=require("events")},function(e,t){e.exports=require("autoprefixer")},function(e,t){e.exports=require("node-sass-import-once")},function(e,t){e.exports=require("css-mqpacker")},function(e,t){e.exports=require("postcss")},function(e,t){e.exports=require("rucksack-css")},function(e,t){e.exports=require("node-sass")},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);var i=n(1),s=n.n(i);function u(e){if(Math.abs(e)<1024)return e+" B";const t=["kB","MB","GB","TB","PB","EB","ZB","YB"];let n=-1;do{e/=1024,++n}while(Math.abs(e)>=1024&&n<t.length-1);return e.toFixed(2)+" "+t[n]}class c{constructor(e,t){this.directory=e,this.name=t,this.config={paths:{components:"components",output:{css:"assets/css",js:"assets/js",icons:"assets/icons",mimeIcons:"assets/mime-icons"}}},this.loadBuildConfiguration()}loadBuildConfiguration(){console.warn(`${this.name}.build.yml file support not implemented, using default config.`)}getComponentsPath(){return r.a.join(this.directory,this.config.paths.components)}getOutputPath(e){if(void 0===this.config.paths.output[e])throw new Error(`No output path specified for type '${e}'`);return r.a.join(this.directory,this.config.paths.output[e])}static loadFromDirectory(e){const t=function(e){const t=r.a.basename(e),n=r.a.join(e,`${t}.info.yml`);return s.a.existsSync(n)?t:null}(e);return function(e,t){if(!Boolean(e))throw new Error(`: ${t}`)}(null!==t,`Could not load theme ${e}. Is it a valid theme folder with an .info.yml file?`),new this(e,t)}}var a=n(2),l=n.n(a);function f(e){const t=e.getOutputPath("css");console.log("Deleting .css and .map files in",t),l()([t+"**/*.css",t+"**/*.map"])}function p(e){const t=e.getOutputPath("js");console.log("Deleting .js files in",t),l()([t+"**/*.js"])}var d=n(3),h=n.n(d),m=n(4),g=n.n(m);function y(e){!function(e,t){const n=r.a.resolve(e.directory,"**/*.js");h()(n,{ignore:"**/_*",follow:!1},function(n,o){return n?t.emit("error",`You do not have permission to access this path: ${n.path}.`):o.length?(console.log(`Compiling ${o.length} files.`),void o.reduce((n,o)=>n.then(async function(e,t,n){const o=r.a.basename(e),i=r.a.join(t.output,[r.a.basename(e,".js"),".min.js"].join(""));return async function(e,t){return new Promise((n,o)=>{s.a.readFile(e,t,(e,t)=>{if(e)return o(e);n(t)})})}(e,{encoding:"utf8"}).then(e=>g.a.minify({[o]:e})).then(e=>(async function(e,t,n){return new Promise((o,r)=>{s.a.writeFile(e,t,n,e=>{if(e)return r(e);o(t.length)})})})(i,e.code)).then(e=>console.log(`${r.a.basename(i)} ${u(e)}`))}.bind(null,o,e,t)),Promise.resolve())):t.emit("error","No input file was found.")})}({directory:e.getComponentsPath(),output:e.getOutputPath("js")})}var b=n(5),v=n(6),j=n.n(v),x=n(7),w=n.n(x),P=n(8),q=n.n(P),O=n(9),$=n.n(O),B=n(10),C=n.n(B),S=n(11),_=n.n(S);function F(e){const t={importer:w.a,directory:e.getComponentsPath(),includePaths:[e.getComponentsPath()],output:e.getOutputPath("css"),outputStyle:"expanded"},n=new b.EventEmitter;n.on("info",console.log),n.on("error",console.log),function(e,t){const n=r.a.resolve(e.directory,"**/*.{sass,scss}");h()(n,{ignore:"**/_*",follow:!1},function(n,o){return n?t.emit("error",`You do not have permission to access this path: ${n.path}.`):o.length?(console.log(`Rendering ${o.length} files.`),void o.reduce((n,o)=>n.then(async function(e,t,n){let o=Object.assign({},t,{file:e,outFile:r.a.join(t.output,[r.a.basename(e,r.a.extname(e)),".css"].join(""))});t.watch&&!t.quiet&&n.emit("info",util.format("=> changed: %s",e));const i=$()([C()(),j()({browsers:["> 1%","last 2 versions"]}),q()({sort:!0})]);return async function(e){return new Promise((t,n)=>{_.a.render(e,(e,o)=>{if(e)return n(e);t(o)})})}(o).then(e=>i.process(e.css.toString())).then(e=>(async function(e,t,n){return new Promise((o,r)=>{s.a.writeFile(e,t,n,e=>{if(e)return r(e);o(t.length)})})})(o.outFile,e.css)).then(t=>console.log(`${r.a.basename(e)} ${u(t)}`))}.bind(null,o,e,t)),Promise.resolve())):t.emit("error","No input file was found.")})}(t,n)}n.d(t,"DrupalTheme",function(){return c}),n.d(t,"scripts",function(){return y}),n.d(t,"styles",function(){return F}),n.d(t,"cleanCss",function(){return f}),n.d(t,"cleanJs",function(){return p})}]));