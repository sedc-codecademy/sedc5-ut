function calculate(first, second, op){
    if (op !== "+" && op !== "-" && op !== "/")
        return 0;
    return eval(`${first}${op}${second}`);
}
