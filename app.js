// require('./batman');
// require('./superman');

// const SuperHero = require('./super-hero');
// const batman = new SuperHero('Batman')
// console.log(batman.getName());
// batman.setName('Bruce Wayne');
// console.log(batman.getName());

// const superman = new SuperHero('Superman');
// console.log(superman.getName());

const math = require('./math');
console.log(math.add(2,3));
console.log(math.subtract(2,3));

const path = require('path');
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log("Format ======> "+path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"))

