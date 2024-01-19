function util(n){
    switch(n){
        case '1':
            console.log(`O dia ${n} não é dia útil`);
            break;
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            console.log(`O dia ${n} é dia útil`);
            break;
        case '7':
            console.log(`O dia ${n} não é dia útil`);
            break;
        default:
            console.log(`Dia inválido`);
    }
}

util('1');
util('2');
util('3');
util('7');