function calcularValor(codigoProd, qtd){
    switch(codigoProd){
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente'
    }
}

console.log(calcularValor(100, 2));
console.log(calcularValor(200, 2));
console.log(calcularValor(300, 2));
console.log(calcularValor(400, 2));
console.log(calcularValor(500, 2));
console.log(calcularValor(600, 2));
console.log(calcularValor(700, 2));