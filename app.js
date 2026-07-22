// require('./batman');
// require('./superman');

// const SuperHero = require('./super-hero');
// const batman = new SuperHero('Batman')
// console.log(batman.getName());
// batman.setName('Bruce Wayne');
// console.log(batman.getName());

// const superman = new SuperHero('Superman');
// console.log(superman.getName());

// const math = require('./math');
// console.log(math.add(2,3));
// console.log(math.subtract(2,3));

// const path = require('node:path');
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log("Format ======> "+path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("movies", "//images", "poster.jpg"));
// console.log(path.join("folder1","folder2", "//images", "poster.jpg"));
// console.log(path.join("folder1","", "//images", "poster.jpg"));
// console.log(path.join("\\folder1","", "//images", "poster.jpg"));
// console.log(path.join(__dirname, "poster.jpg"));

/* console.log(path.resolve("movies", "images", "poster.jpg"));
console.log(path.resolve("\\folder1","folder2", "images", "poster.jpg"));
console.log(path.resolve("folder1","", "images", "poster.jpg"));
console.log(path.resolve("folder1","", "images", "poster.jpg"));
console.log(path.resolve(__dirname, "poster.jpg")); */

/* const callback = (name) => {
    console.log(`Hello ${name}`);
}

const higherOrderFuction = (callback) => {
    const name = 'Jilu';
    callback(name);
}

higherOrderFuction(callback); */


// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, toppings) => {
//     console.log(`Order Received for ${size} size pizza with ${toppings} toppings `)
// })

// emitter.emit("order-pizza","large", "mushroom");

// const PizzaShop = require('./pizza-shop');
// const pizzaShop = new PizzaShop();

// pizzaShop.on("order",(size, toppings) => {
//     console.log(`Order Received!!! Baking a ${size} pizza with ${toppings} toppings`)
// })

// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();

const fs = require('node:fs');

console.log("First");

const fileContents = fs.readFileSync('./file.txt', "utf-8")
console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("Third");

fs.writeFileSync('./greet.txt', "Hello Bangalore!!!");

fs.writeFile("./greet.txt", "  Greetings Everyone", {flag: 'a'},(error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("File written");
    }
})