function extenso(numero){
    switch(numero){
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(extenso(0));
console.log(extenso(1));
console.log(extenso(2));
console.log(extenso(3));
console.log(extenso(4));
console.log(extenso(5));
console.log(extenso(6));
console.log(extenso(7));
console.log(extenso(8));
console.log(extenso(9));
console.log(extenso(10));
console.log(extenso(11));