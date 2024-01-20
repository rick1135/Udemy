function pedido(cdg, qtd){
    switch(cdg){
        case '100':
            console.log(`Valor a ser pago: R$ ${qtd*3}`);
            break;
        case '200':
            console.log(`Valor a ser pago: R$ ${qtd*4}`);
            break;
        case '300':
            console.log(`Valor a ser pago: R$ ${qtd*5.5}`);
            break;
        case '400':
            console.log(`Valor a ser pago: R$ ${qtd*7.5}`);
            break;
        case '500':
            console.log(`Valor a ser pago: R$ ${qtd*3.5}`);
            break;
        case '600':
            console.log(`Valor a ser pago: R$ ${qtd*2.8}`);
            break;
        default:
            console.log('Produto inexistente');
            break;
    }
}
pedido('100', '2');
pedido('200', '2');
pedido('300', '2');
pedido('400', '2');
pedido('500', '2');
pedido('600', '2');
pedido('700', '2');