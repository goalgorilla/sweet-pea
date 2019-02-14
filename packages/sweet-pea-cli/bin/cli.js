#!/usr/bin/env node
!function(e,o){for(var n in o)e[n]=o[n]}(exports,function(e){var o={};function n(s){if(o[s])return o[s].exports;var r=o[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,s){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(s,r,function(o){return e[o]}.bind(null,r));return s},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=4)}([function(e,o){e.exports=require("@sweet-pea/core")},function(e,o){e.exports=require("path")},function(e,o){e.exports=require("minimist")},function(e){e.exports={name:"@sweet-pea/cli",version:"0.2.0",description:"CLI to the Open Social front-end build tools",author:"Alexander Varwijk <alexander@goalgorilla.com>",license:"GPL-2.0",bin:{sp:"dist/cli.js"},scripts:{build:"webpack --mode production --progress src/cli.js -o bin/cli.js","build:dev":"webpack --mode development --progress src/cli.js -o bin/cli.js",lint:"eslint src/cli.js"},peerDependencies:{"@sweet-pea/core":">=0.1.0"},dependencies:{minimist:"^1.2.0"}}},function(e,o,n){"use strict";n.r(o);var s=n(1),r=n.n(s),t=n(2),i=n.n(t),c=n(0);function l(e,o=20){console.log("Usage: sp <command>"),console.log(),console.log("Commands:"),console.group(),console.log(`${"help".padEnd(o)} Prints these usage instructions.`);for(let n in e)console.log(`${n.padEnd(o)} ${e[n].usage}`);console.groupEnd(),console.log(),console.log("Options: "),console.group(),console.log(`${"--folder=<path>".padEnd(o)} Takes a path to a folder to use instead of the current directory.`),console.groupEnd()}const u=n(3),a={clean:{usage:"Remove the compiled css/js files.",run:e=>{Object(c.cleanCss)(e),Object(c.cleanJs)(e)}},"clean:css":{usage:"Remove the compiled css files.",run:c.cleanCss},"clean:js":{usage:"Remove the compiled js files.",run:c.cleanJs},"image-icons":{usage:"Optimize icons to individual icon files.",run:c.imageIcons},"sprite-icons":{usage:"Compile a single svg sprite from the icons in the theme.",run:c.spriteIcons},scripts:{usage:"Compile the javascript of the current theme.",run:c.scripts},styles:{usage:"Compile the sass of the current theme.",run:c.styles}};console.log(`${u.name} v${u.version}`);const p=process.argv.slice(2);0===p.length&&(l(a),process.exit(1));const d=p.shift();"-"===d.substr(0,1)&&(l(a),process.exit(1)),"help"===d?(l(a),process.exit(0)):void 0===a[d]&&(console.error(`Unknown command: ${d}`),console.log("For usage instructions try `sp help`"),process.exit(1));const f=i()(p);let g=process.cwd();void 0!==f.directory&&(g=r.a.resolve(g,f.directory));const m=c.DrupalTheme.loadFromDirectory(g);a[d].run(m)}]));