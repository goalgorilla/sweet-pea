
/**
 * If the condition is false, prints the usage instructions and exits.
 *
 * @param condition
 *   The condition that is required for the program to run.
 */
export function assertUsage(condition) {
  if (condition) {
    return;
  }

  printUsage();
  process.exit(1);
}

/**
 * Prints the usage instructions for this program.
 *
 * @param commands { command: { usage: string, run: function }, ... }
 *   An object that contains a mapping of command names to usage instructions.
 * @param nameMaxLength integer
 *   The maximum length to use for displaying the names of commands and options.
 */
export function printUsage(commands, nameMaxLength = 20) {
  console.log("Usage: sp <command>");
  console.log();

  console.log("Commands:");
  console.group();
  console.log(`${'help'.padEnd(nameMaxLength)} Prints these usage instructions.`);
  for (let command in commands) {
    console.log(`${command.padEnd(nameMaxLength)} ${commands[command].usage}`)
  }
  console.groupEnd();
  console.log();

  console.log("Options: ");
  console.group();
  console.log(`${'--folder=<path>'.padEnd(nameMaxLength)} Takes a path to a folder to use instead of the current directory.`)
  console.groupEnd();
}
