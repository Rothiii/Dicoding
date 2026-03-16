const assert = require("assert");
const { generateRandomStringSync } = require("./utils");

// skenario positif
const randomString = generateRandomStringSync(8);
assert.strictEqual(typeof randomString, "string");
assert.strictEqual(randomString.length, 8);

// skenario negatif
assert.throws(() => generateRandomStringSync("string"), {
	name: "Error",
	message: "Length must be a number",
});

assert.throws(() => generateRandomStringSync(0), {
	name: "Error",
	message: "Length must be at least 1",
});
