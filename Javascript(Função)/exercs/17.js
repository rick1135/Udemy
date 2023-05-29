function aumento(plano, salario){
    switch(plano){
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano inválido'
    }
}

console.log(aumento('A', 1000));
console.log(aumento('B', 1000));
console.log(aumento('C', 1000));
console.log(aumento('D', 1000));