function test(name, first, second, op, expected) {
    try {
        var actual = calculate(first, second, op);
    } catch (e){
        console.warn(`NOT OK: (${name}) Exception occured: ${e}`);
        return;
    }
    if (actual === expected) {
        console.log(`OK: (${name}) `);
    } else {
        console.warn(`NOT OK: (${name}) Gotten ${actual}, expected ${expected}`);
    }
}

test("multiply three with five",3, 5, "*", 15);
test("add two and three",2, 3, "+", 5);
test("divide fifteen with five",15, 5, "/", 3);
test("invalid operation", 2, 3, "soberi", 0);
test("subtract fifteen and five",15, 5, "-", 10);

test("add point-one and point-two",0.1, 0.2, "+", 0.3);
test("divide zero with zero", -3, 0, "/", Infinity);



// // 1. Set up parameters
// var first = 3;
// var second = 5;
// var op = "*";
// // 2. call calculate function
// var result = calculate(first, second, op);
// // 3. compare results
// if (result === 15) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }

// // 1. Set up parameters
// var first = 2;
// var second = 3;
// var op = "+";
// // 2. call calculate function
// var result = calculate(first, second, op);
// // 3. compare results
// if (result === 5) {
//     console.log("OK");
// } else {
//     console.log("NOT OK");
// }