function verificaFruta(fruta){
    switch(fruta){
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro, fruta inválida'
    }
}

console.log(verificaFruta('maçã'));
console.log(verificaFruta('kiwi'));
console.log(verificaFruta('melancia'));
console.log(verificaFruta('banana'));
console.log(verificaFruta('abacaxi'));
console.log(verificaFruta('pera'));
console.log(verificaFruta('uva'));
