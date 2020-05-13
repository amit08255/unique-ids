const IntegerId = require('./integer-id');
const stringId = require('./string-id');
const integerId = new IntegerId();

console.log(integerId.encode(1, 2, 3));
console.log(integerId.encode(1, 2, 3)) // o2fXhV
console.log(integerId.encode([1, 2, 3])) // o2fXhV
// strings containing integers are coerced to numbers:
console.log(integerId.encode('1', '2', '3')) // o2fXhV
console.log(integerId.encode(['1', '2', '3'])) // o2fXhV
// BigInt support:
console.log(integerId.encode([1n, 2n, 3n])) // o2fXhV
// Hex notation BigInt:
console.log(integerId.encode([0x1n, 0x2n, 0x3n])) // o2fXhV


/**
 * String unique ID generator examples
 */

 console.log(stringId("secrets"));