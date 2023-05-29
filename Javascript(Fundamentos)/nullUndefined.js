var valor;
console.log(valor); // undefined = não inicializada

valor=null;
console.log(valor); // null = ausência de valor

const produto = {};
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.50;
console.log(produto); // { preco: 3.5 }

produto.preco = undefined; // evitar atribuir undefined (deixe que a linguagem atribua)
console.log(!!produto.preco); // false
console.log(produto); 

produto.preco = null; // sem preço
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }