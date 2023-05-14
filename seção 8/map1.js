const nums = [1, 2, 3, 4, 5];

// O map é um for com propósito, ou seja, ele serve para transformar um array em outro
let resultado = nums.map(function(e) {
    return e * 2;
}); // O map gera um novo array

console.log(resultado, nums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
// O map pode ser encadeado
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);