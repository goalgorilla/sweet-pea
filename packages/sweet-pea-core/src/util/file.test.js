import {humanFileSize} from "./file";

const byteFormats = [
  [-1025, '-1.00 kB'],
  [-20, '-20 B'],
  [0, '0 B'],
  [10, '10 B'],
  [1023, '1023 B'],
  [1024, '1.00 kB'],
  [1025, '1.00 kB'],
  [1024 * 1024, '1.00 MB'],
  [1024 * 1024 * 1024 + 1, '1.00 GB'],
];

test.each(byteFormats)('.humanFileSize(%i)', (bytes, humanReadable) => {
  expect(humanFileSize(bytes)).toBe(humanReadable);
});
