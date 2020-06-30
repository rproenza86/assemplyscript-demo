const assert = require("assert");
const myModule = require("..");

assert.equal(myModule.add(1, 2), 3);
console.log('ok => 1+2 =', myModule.add(1, 2));
