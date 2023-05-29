const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}
const filha1 = Object.create(pai); //cria um objeto tendo como prototipo o objeto passado como parametro
filha1.nome = 'Ana';

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true} //writable: false não permite alterar o valor do atributo
});

console.log(filha2.nome);

filha2.nome = 'Carla';

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1)); //retorna as chaves do objeto
console.log(Object.keys(filha2)); //retorna as chaves do objeto

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //verifica se a chave pertence ao objeto
        console.log(key) : console.log(`Por herança: ${key}`);
}