function comprarCarro(carro){
    switch (carro){
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
            break;
        default:
            console.log('Veículo não encontrado');
    }
}

comprarCarro('hatch');
comprarCarro('sedan');
comprarCarro('motocicleta');
comprarCarro('caminhonete');
comprarCarro('barco');