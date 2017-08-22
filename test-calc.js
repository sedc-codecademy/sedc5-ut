function test(first, second, op, result) {
    var real = calculate(first, second, op);
    if (real === result) {
        console.log("OK");
    } else {
        console.log("NOT OK");

    }
}

test(3, 5, "*", 15);
test(2, 3, "+", 5);
test(15, 5, "/", 3);



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