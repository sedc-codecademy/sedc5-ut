function calculate(first, second, op) {
    if ((second === 0) && (op === "/")) {
        if (first !== 0) {
            throw "Invalid arguments, cannot divide by zero"
        }
    }

    const validOperators = ["+", "*", "/", "-"];
    if (validOperators.indexOf(op) === -1) {
        return 0;
    }

    switch (op) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return first / second;
    }
}