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
}

module.exports = {
  assertUsage,
  printUsage
};