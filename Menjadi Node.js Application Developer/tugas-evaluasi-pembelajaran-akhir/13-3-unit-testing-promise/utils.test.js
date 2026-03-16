const assert = require("assert");
const { generateRandomStringProm } = require("./utils");

// skenario positif

assert.doesNotReject(async () => {
	const randomString = await generateRandomStringProm(8);
	assert.strictEqual(typeof randomString, "string");
	assert.strictEqual(randomString.length, 8);
});

//skenario negatif
assert.rejects(
	async () => {
		await generateRandomStringProm("string");
	},
	{
		name: "Error",
		message: "Length must be a number",
	},
);

assert.rejects(
	async () => {
		await generateRandomStringProm(-1);
	},
	{
		name: "Error",
		message: "Length must be greater than 0",
	},
);
