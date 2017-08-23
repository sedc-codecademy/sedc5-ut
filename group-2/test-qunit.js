QUnit.test("verify that three plus five equals eight", function (assert) {
    // Arrange = set up variables
    var first = 3;
    var second = 5;
    var op = "+";
    var expected = 8;
    // Act = execute
    var actual = calculate(first, second, op);
    // Assert = check results
    assert.equal(actual, expected);
});