import path from 'path';
import DrupalTheme from './DrupalTheme';

describe('Drupal Theme', () => {
  test('has a default components path', () => {
    const Theme = new DrupalTheme(__dirname);
    expect(Theme.getComponentsPath()).toBe(path.join(__dirname, "components"));
  });

  test('throws an error when an unsupported output type path is requested', () => {
    const Theme = new DrupalTheme(__dirname);
    expect(() => Theme.getOutputPath('nonexistant')).toThrow();
  });
});
