"use strict";

import { DrupalTheme, cleanCss, cleanJs, scripts, styles } from '@sweet-pea/core';

const toolInfo = require('../package.json');

/**
 * If the condition is false, prints the usage instructions and exits.
 *
 * @param condition
 *   The condition that is required for the program to run.
 */
function assertUsage(condition) {
  if (condition) {
    return;
  }

  printUsage();
  process.exit(1);
}

/**
 * Prints the usage instructions for this program.
 */
function printUsage() {
  console.log("Usage: sp command [options]");
  console.log();
  console.log("Commands:");
  console.log("\thelp\t\tPrints these usage instructions.");
  console.log("\tclean\t\tRemove the compiled css/js files.");
  console.log("\tclean:css\t\tRemove the compiled css files.");
  console.log("\tclean:js\t\tRemove the compiled js files.");
  console.log("\tscripts\t\tCompile the javascript of the current theme.");
  console.log("\tstyles\t\tCompile the sass of the current theme.");
}

// We always print version info.
console.log(`${toolInfo.name} v${toolInfo.version}`);

// Strip the node executable and cli filename from the arguments.
const args = process.argv.slice(2);

// Require at least a single argument to indicate the user action.
assertUsage(args.length > 0);

// The first argument must be a command (not prefixed with "-" or "--").
const command = args[0];
assertUsage(command.substr(0, 1) !== "-");

// Resolve the provided command to an action that we can execute.
let action;
switch(command) {
  case 'clean':
    action = (Theme) => {
      cleanCss(Theme);
      cleanJs(Theme);
    };
    break;
  case 'clean:css':
    action = cleanCss;
    break;
  case 'clean:js':
    action = cleanJs;
    break;
  case 'scripts':
    action = scripts;
    break;
  case 'styles':
    action = styles;
    break;
  case 'help':
    printUsage();
    process.exit(0);
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.log("For help try `sp help`");
    process.exit(1);
}

// TODO: Allow this program to run for modules instead of themes.
// TODO: Add folder option here to use instead of current working dir.

const Theme = DrupalTheme.loadFromDirectory(process.cwd());

action(Theme);
