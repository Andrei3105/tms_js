// Task #1
//
// let manager, name, currentUser;
// name = 'Вася';
// manager = name;
// currentUser = manager;
// console.log(currentUser);

// Task #2

// let name = "Вася";
// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);
//
//  Task #3
//
// console.log(" \n \n" - 2);
// console.log(true + false);
// console.log(false + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(7 / 0);
// console.log(4 + 5 + "px");
// console.log("" + 3 + 0);
// console.log("" - 4 + 0);
// console.log("!" + 2 + 5);
// console.log("1" - 2);
// console.log("3px" - 2);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);

// Task #4

// console.log(2 > 4);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(false == 0);
// console.log(false == "");
// console.log(false === "");

let animal = {
    type: "dog",
    weight: 40,
}
animal = {
    ...animal,
    speed: 20,
    color: "red",
}

delete animal.weight;

console.log(animal);
// console.log(animal.weight);
// console.log(animal.speed);
// console.log(animal.color);