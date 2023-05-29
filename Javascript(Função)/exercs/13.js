function verificaDia(dia){
    switch(dia){
        case 1:
            return 'Fim de semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia inválido'
    }
}

console.log(verificaDia(1));
console.log(verificaDia(2));
console.log(verificaDia(3));
console.log(verificaDia(4));
console.log(verificaDia(5));
console.log(verificaDia(6));
console.log(verificaDia(7));