function calculator(numberOne, numberTwo, operation) {
    var result = "";
    switch (operation) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        default:
            result = "Esta operação está com parâmetros incorretos, tente novamente."
            break;
    }
    return result;
}
