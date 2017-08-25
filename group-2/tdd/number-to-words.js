function numberToWords(number) {
    if (typeof number !== "number")
        throw "Only works for numbers";

    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var tensNames = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (number < 10) {
        return digits[number];
    }

    if (number < 20) {
        return teens[number - 10];
    }

    if (number < 100) {
        var units = digits[number % 10];
        var tens = tensNames[Math.floor(number / 10)];

        if (units === "zero") {
            return tens;
        } else {
            return tens + " " + units;
        }
    }

    var lastTwo = numberToWords(number % 100);
    var hundreds = digits[Math.floor(number / 100)];
    
    if (lastTwo === "zero") {
        return hundreds +" hundred";
    } else {
        return hundreds +" hundred " + lastTwo;
    }
}