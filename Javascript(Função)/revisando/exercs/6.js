function jurosSimples(capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo);
}

function jurosCompostos(capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo;
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

console.log(jurosSimples(100, 10/100, 3));
console.log(jurosCompostos(100, 10/100, 3));

console.log(jurosSimples(100, 10/100, 4));
console.log(jurosCompostos(100, 10/100, 4));

console.log(jurosSimples(100, 10/100, 8));
console.log(jurosCompostos(100, 10/100, 8));