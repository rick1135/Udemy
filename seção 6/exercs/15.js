function verificaCarro(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(verificaCarro('hatch'));
console.log(verificaCarro('sedan'));
console.log(verificaCarro('motocicleta'));
console.log(verificaCarro('caminhonete'));
console.log(verificaCarro('fusca'));
console.log(verificaCarro('ferrari'));
console.log(verificaCarro('lamborghini'));