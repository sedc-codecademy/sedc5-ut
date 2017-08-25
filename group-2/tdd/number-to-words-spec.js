describe("Number to words tests", function () {

    describe("Exception tests", function () {

        it("verifies that empty input results in exception thrown", function () {
            // 1. Arrange
            var input = "";
            // 2. Act
            // 3. Assert
            expect(function () { numberToWords(input); }).toThrow();
        });

        it("verifies that undefined input results in exception thrown", function () {
            // 1. Arrange
            var input = undefined;
            // 2. Act
            // 3. Assert
            expect(function () { numberToWords(input); }).toThrow();
        });

        it("verifies that null input results in exception thrown", function () {
            // 1. Arrange
            var input = null;
            // 2. Act
            // 3. Assert
            expect(function () { numberToWords(input); }).toThrow();
        });

        it("verifies that zero string input results in exception thrown", function () {
            // 1. Arrange
            var input = "0";
            // 2. Act
            // 3. Assert
            expect(function () { numberToWords(input); }).toThrow();
        });
    });

    describe("single digit tests", function () {

        it("verifies that zero input results in zero output", function () {
            // 1. Arrange
            var input = 0;
            var expected = "zero";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });
    })
});