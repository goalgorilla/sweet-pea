export default function assert(condition, error) {
  if (!Boolean(condition)) {
    throw new Error('Assertion error' + error ? `: ${error}` : '');
  }
}
