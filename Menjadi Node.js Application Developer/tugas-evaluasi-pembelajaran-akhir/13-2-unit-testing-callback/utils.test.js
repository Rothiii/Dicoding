const assert = require('assert');
const { generateRandomString } = require('./utils');

// skenario positif
generateRandomString(8, (err, randomString) => {
  assert.strictEqual(err, null);
  assert.strictEqual(typeof randomString, 'string');
  assert.strictEqual(randomString.length, 8);
});

//skenario negatif
generateRandomString('string', (err, randomString) => {
  assert.strictEqual(err instanceof Error, true);
  assert.strictEqual(err.message, 'Length must be a number');
  assert.strictEqual(randomString, undefined);
});

generateRandomString(0, (err, randomString) => {
  assert.strictEqual(err instanceof Error, true);
  assert.strictEqual(err.message, 'Length must be greater than 0');
  assert.strictEqual(randomString, undefined);
});