function numberToWords(number){
    if (typeof number !== "number")
        throw "Only works for numbers";
    
    if (number == 0)
        return "zero";
    return "";
}