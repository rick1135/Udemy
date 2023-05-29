function calculadora(a, b, operacao){
    switch(operacao){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Operação inválida';
    }
}

console.log(calculadora(2, 3, '+'));
console.log(calculadora(2, 3, '-'));
console.log(calculadora(2, 3, '*'));
console.log(calculadora(2, 3, '/'));
console.log(calculadora(2, 3, 'a'));
