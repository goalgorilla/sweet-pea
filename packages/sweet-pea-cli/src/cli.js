"use strict";

import path from 'path';
import parseArgs from 'minimist';
import { DrupalTheme, cleanCss, cleanJs, scripts, styles, imageIcons } from '@sweet-pea/core';
import { printUsage } from './helpers';

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
  'image-icons': {
    usage: 'Optimize icons to individual icon files.',
    run: imageIcons,
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
if (args.length === 0) {
  printUsage(commands);
  process.exit(1);
}

// The first argument must be a command (not prefixed with "-" or "--").
const command = args.shift();
if (command.substr(0, 1) === "-") {
  printUsage(commands);
  process.exit(1);
}

// For the help command we can terminate early.
if (command === 'help') {
  printUsage(commands);
  process.exit(0);
}
// If we're dealing with an unknown command then we can exit.
else if (typeof commands[command] === 'undefined') {
  console.error(`Unknown command: ${command}`);
  console.log("For usage instructions try `sp help`");
  process.exit(1);
}

const options = parseArgs(args);

let directory = process.cwd();
// Allow the user to provide a relative or absolute path to the theme.
if (typeof options['directory'] !== 'undefined') {
  directory = path.resolve(directory, options['directory']);
}

const Theme = DrupalTheme.loadFromDirectory(directory);

commands[command].run(Theme);
