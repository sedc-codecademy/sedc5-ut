function numberToWords(number) {
    number = Number(number);
    if (!number) {
        return "";
    }

    if (number < 0) {
        throw "Does not work for negative numbers";
    }

    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var decades = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 10) {
        return digits[number];
    }

    if (number < 20) {
        return teens[number - 10];
    }

    var decade = Math.floor(number / 10);
    var unit = number % 10;
    if (unit === 0){
        return decades[decade];
    }
    return decades[decade] + " " + digits[unit];


}