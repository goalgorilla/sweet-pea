#! /usr/bin/env node

const toolInfo = require('./package.json');

// We always print version info.
console.log(`${toolInfo.name} version ${toolInfo.version}`);
