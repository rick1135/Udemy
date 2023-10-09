let valor;
console.log(valor); // undefined

valor = null; // ausência de valor
console.log(valor); // null
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.5;
console.log(produto); // { preco: 3.5 }

produto.preco = undefined;
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);