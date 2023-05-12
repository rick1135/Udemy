const pessoa = {
    nome: 'Joao',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //retorna as chaves do objeto
console.log(Object.values(pessoa)); //retorna os valores do objeto
console.log(Object.entries(pessoa)); //retorna um array com os pares chave/valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', { //define uma propriedade
    enumerable: true, //se vai ser listada
    writable: false, //se vai ser alterada
    value: '01/01/2019' //valor
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2); //concatena os objetos, sobrescrevendo os valores de chaves iguais
console.log(obj);

Object.freeze(obj);
obj.c = 1234;   
console.log(obj);