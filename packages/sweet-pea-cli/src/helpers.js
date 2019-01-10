
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
 * @param commandMaxLength integer
 *   The maximum length to use for displaying the command names.
 */
export function printUsage(commands, commandMaxLength = 15) {
  console.log("Usage: sp COMMAND");
  console.log();
  console.log("Commands:");
  console.group();
  console.log(`${'help'.padEnd(commandMaxLength)} Prints these usage instructions.`);
  for (let command in commands) {
    console.log(`${command.padEnd(commandMaxLength)} ${commands[command].usage}`)
  }
  console.groupEnd();
}
