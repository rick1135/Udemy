const funcionario = {nome: 'maria', salario: 1234.56};
const clone = {ativo: true, ...funcionario};
console.log(clone);

const grupoA = ['Maria', 'João', 'Rick'];
const grupoB = ['Zika', ...grupoA, 'Gx'];
console.log(grupoB);