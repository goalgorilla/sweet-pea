"use strict";

import { DrupalTheme, cleanCss, cleanJs, scripts, styles } from '@sweet-pea/core';
import { assertUsage, printUsage } from './helpers';

const toolInfo = require('../package.json');

/**
 * A mapping of commands to their usage information and handlers.
 */
const commands = {
  'clean': {
    usage: 'Remove the compiled css/js files.',
    run: (target) => {
      // TODO: Once these return promises they should run as parallel promises.
      cleanCss(target);
      cleanJs(target);
    }
  },
  'clean:css': {
    usage: 'Remove the compiled css files.',
    run: cleanCss
  },
  'clean:js': {
    usage: 'Remove the compiled js files.',
    run: cleanJs
  },
  'scripts': {
    usage: 'Compile the javascript of the current theme.',
    run: scripts
  },
  'styles': {
    usage: 'Compile the sass of the current theme.',
    run: styles
  },
};

// We always print version info.
console.log(`${toolInfo.name} v${toolInfo.version}`);

// Strip the node executable and cli filename from the arguments.
const args = process.argv.slice(2);

// Require at least a single argument to indicate the user action.
assertUsage(args.length > 0);

// The first argument must be a command (not prefixed with "-" or "--").
const command = args[0];
assertUsage(command.substr(0, 1) !== "-");

// For the help command we can terminate early.
if (command === 'help') {
  printUsage(commands);
  process.exit(0);
}

// If we're dealing with an unknown command then we can exit.
if (typeof commands[command] === 'undefined') {
  console.error(`Unknown command: ${command}`);
  console.log("For usage instructions try `sp help`");
  process.exit(1);
}

// TODO: Allow this program to run for modules instead of themes.
// TODO: Add folder option here to use instead of current working dir.

const Theme = DrupalTheme.loadFromDirectory(process.cwd());

action(Theme);
