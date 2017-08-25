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

        it("verifies that 1 input results in one output", function () {
            // 1. Arrange
            var input = 1;
            var expected = "one";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 7 input results in seven output", function () {
            // 1. Arrange
            var input = 7;
            var expected = "seven";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 4 input results in four output", function () {
            // 1. Arrange
            var input = 4;
            var expected = "four";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

    })

    describe("Double digits tests", function () {
        it("verifies that 26 input results in twenty six output", function () {
            // 1. Arrange
            var input = 26;
            var expected = "twenty six";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 10 input results in ten output", function () {
            // 1. Arrange
            var input = 10;
            var expected = "ten";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 20 input results in twenty output", function () {
            // 1. Arrange
            var input = 20;
            var expected = "twenty";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 99 input results in ninety nine output", function () {
            // 1. Arrange
            var input = 99;
            var expected = "ninety nine";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 12 input results in twelve output", function () {
            // 1. Arrange
            var input = 12;
            var expected = "twelve";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

    });

    describe("Multi digits tests", function () {
        it("verifies that 246 input results in two hundred forty six output", function () {
            // 1. Arrange
            var input = 246;
            var expected = "two hundred forty six";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 100 input results in one hundred output", function () {
            // 1. Arrange
            var input = 100;
            var expected = "one hundred";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 999 input results in nine hundred ninety nine", function () {
            // 1. Arrange
            var input = 999;
            var expected = "nine hundred ninety nine";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 1234 input results in one thousand two hundred thirty four output", function () {
            // 1. Arrange
            var input = 1234;
            var expected = "one thousand two hundred thirty four";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 1000 input results in one thousand output", function () {
            // 1. Arrange
            var input = 1000;
            var expected = "one thousand";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

        it("verifies that 999999 input results in nine hundred ninety nine thousand nine hundred ninety nine output", function () {
            // 1. Arrange
            var input = 999999;
            var expected = "nine hundred ninety nine thousand nine hundred ninety nine";
            // 2. Act
            var actual = numberToWords(input);
            // 3. Assert
            expect(actual).toEqual(expected);
        });

    });
});