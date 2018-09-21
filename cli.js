#! /usr/bin/env node
"use strict";

const toolInfo = require('./package.json');
const { assertUsage } = require('./lib/usage');
const DrupalTheme = require('./lib/DrupalTheme');
const resolveCommand = require('./lib/commands');

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
// TODO: Parse args here instead of in resolveCommand.
const action = resolveCommand(command, args.slice(1));

// It could be that an action was requested that could be executed without
// loading a theme. In that case we're all done.
if (!action) {
  process.exit(0);
}

const Theme = DrupalTheme.loadFromDirectory(process.cwd());

action(Theme);
