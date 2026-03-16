/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */

const { Transform } = require('stream');
function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, next) {
      next(null, Buffer.from(chunk).toString('base64'));
    }
  });
}