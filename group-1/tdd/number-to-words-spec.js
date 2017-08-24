describe("Number to words tests", function() {
    it("verifies that empty input will return empty output", function() {
        // 1. Arrange
        var input = "";
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that null input will return empty output", function() {
        // 1. Arrange
        var input = null;
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that undefined input will return empty output", function() {
        // 1. Arrange
        var input = undefined;
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that space input will return empty output", function() {
        // 1. Arrange
        var input = " ";
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that non-numeric string input will return empty output", function() {
        // 1. Arrange
        var input = "non-numeric";
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that object input will return empty output", function() {
        // 1. Arrange
        var input = { value: "some-value" };
        var expected = "";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that negative numbers trigger exceptions", function(){
        // 1. Arrange
        var input = -7;
        // 2, 3. Act, Assert
        expect(function(){ 
            numberToWords(input);
        }).toThrow();
        
    });

    xit("verifies that numeric array input will return joined string output", function() {
        // 1. Arrange
        var input = [1, 2, 3];
        var expected = "one, two, three";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 9 input will return 'nine' as output", function() {
        // 1. Arrange
        var input = 9;
        var expected = "nine";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that string 9 input will return 'nine' as output", function() {
        // 1. Arrange
        var input = "9";
        var expected = "nine";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 2 input will return 'two' as output", function() {
        // 1. Arrange
        var input = 2;
        var expected = "two";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 11 input will return 'eleven' as output", function() {
        // 1. Arrange
        var input = 11;
        var expected = "eleven";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 17 input will return 'seventeen' as output", function() {
        // 1. Arrange
        var input = 17;
        var expected = "seventeen";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 20 input will return 'twenty' as output", function() {
        // 1. Arrange
        var input = 20;
        var expected = "twenty";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 21 input will return 'twenty one' as output", function() {
        // 1. Arrange
        var input = 21;
        var expected = "twenty one";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 75 input will return 'seventy five' as output", function() {
        // 1. Arrange
        var input = 75;
        var expected = "seventy five";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });

    it("verifies that numeric 100 input will return 'one hundred' as output", function() {
        // 1. Arrange
        var input = 100;
        var expected = "one hundred";
        // 2. Act
        var actual = numberToWords(input);
        // 3. Assert
        expect(actual).toEqual(expected);
    });


});