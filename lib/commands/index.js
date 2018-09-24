"use strict";

const { printUsage } = require('../usage');
const cleanCss = require('./cleanCss');
const cleanJs = require('./cleanJs');
const scripts = require('./scripts');
const styles = require('./styles');

function resolveCommand(command, args) {
  switch(command) {
    case 'help':
      printUsage();
      return null;
    case 'clean':
      return (Theme) => {
        cleanCss(Theme);
        cleanJs(Theme);
      };
    case 'clean:css':
      return cleanCss;
    case 'clean:js':
      return cleanJs;
    case 'scripts':
      return scripts;
    case 'styles':
      return styles;
    default:
      console.error(`Unknown command: ${command}`);
      console.log("For help try `sp help`");
      process.exit(1);
  }
}

module.exports = resolveCommand;
