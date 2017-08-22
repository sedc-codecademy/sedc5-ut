QUnit.assert.closeEnough = function(number, expected, error, message) {
    if (error === void 0 || error === null) {
      error = 0.00001 // default error
    }
  
    var result = number == expected || (number < expected + error && number > expected - error) || false
  
    this.push(result, number, expected, message);
}

QUnit.assert.isNaN = function(actual, message) {
    // todo: code the assertion
}

QUnit.test( "multiply three with five", function( assert ) {
    // 1. Arrange
    let first = 3;
    let second = 5;
    let op = "*";
    let expected = 15;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.equal(actual, expected,"Passed multiply test");
});

QUnit.test( "add two and three", function( assert ) {
    // 1. Arrange
    let first = 2;
    let second = 3;
    let op = "+";
    let expected = 5;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.equal(actual, expected,"Passed multiply test");
});

QUnit.test( "divide fifteen with five", function( assert ) {
    // 1. Arrange
    let first = 15;
    let second = 5;
    let op = "/";
    let expected = 3;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.equal(actual, expected,"Passed multiply test");
});

QUnit.test( "invalid operation", function( assert ) {
    // 1. Arrange
    let first = 2;
    let second = 3;
    let op = "soberi";
    let expected = 0;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.equal(actual, expected,"Passed multiply test");
});

QUnit.test( "subtract fifteen and five", function( assert ) {
    // 1. Arrange
    let first = 15;
    let second = 5;
    let op = "-";
    let expected = 10;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.equal(actual, expected,"Passed multiply test");
});

QUnit.test( "add point-one and point-two", function( assert ) {
    // 1. Arrange
    let first = 0.1;
    let second = 0.2;
    let op = "+";
    let expected = 0.3;
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.closeEnough(actual, expected);
});

QUnit.test( "divide zero with zero", function( assert ) {
    // 1. Arrange
    let first = 0;
    let second = 0;
    let op = "/";
    // 2. Act
    let actual = calculate(first, second, op);
    // 3. Assert
    assert.ok(isNaN(actual));
});

QUnit.test( "divide three with zero", function( assert ) {
    // 1. Arrange
    let first = 3;
    let second = 0;
    let op = "/";
    // 2, 3. Act, Assert
    assert.throws(()=>calculate(first, second, op));
});