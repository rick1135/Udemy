const pessoa = {nome:'Joao'};
pessoa.nome = 'Pedro';
console.log(pessoa);

//pessoa = {nome: 'Ana'}; //erro

Object.freeze(pessoa); //congela o objeto, não permite alterações

pessoa.nome = 'Maria';
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome: 'Joao'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);