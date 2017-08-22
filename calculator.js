function calculate(first, second, op){
    const validOperators = ["+","*", "/", "-"];
    if (validOperators.indexOf(op)===-1) {
        return 0;
    }

    return eval(`${first}${op}${second}`);
}