const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

const carro = { modelo: 'A4', valor: 89000 };
Object.freeze(carro);
console.log('Congelado:', Object.isFrozen(carro));

carro.modelo = 'A5';
carro.valor = 90000;
delete carro.modelo;
console.log(carro);