function montanteJurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function montanteJurosCompostos(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(montanteJurosSimples(100, 10/100, 2));
console.log(montanteJurosSimples(100, 10/100, 3));
console.log(montanteJurosSimples(100, 10/100, 4));
console.log(montanteJurosSimples(100, 10/100, 5));
console.log(montanteJurosSimples(100, 10/100, 6));
console.log(montanteJurosCompostos(100, 10/100, 3));
console.log(montanteJurosCompostos(100, 10/100, 4));
console.log(montanteJurosCompostos(100, 10/100, 5));
console.log(montanteJurosCompostos(100, 10/100, 6));
