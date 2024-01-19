function calculadora(x, y, op){
    switch(op){
        case '+':
            console.log(x+y);
            break;
        case '-':
            console.log(x-y);
            break;
        case '*':
            console.log(x*y);
            break;
        case '/':
            console.log(x/y);
            break;
        default:
            console.log('Operação não encontrada');
    }
}

calculadora(1, 2, '+');
calculadora(1, 2, '-');
calculadora(1, 2, '*');
calculadora(1, 2, '/');