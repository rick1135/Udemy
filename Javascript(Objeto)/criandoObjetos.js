//usando a notação literal
const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

//funções construtoras
function Produto(nome, preco, desc) { 
    this.nome = nome; //this torna o atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('caneta', 7.99, 0.15);
const p2 = new Produto('notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, //atributo publico
        salarioBase, //atributo publico
        faltas, //atributo publico
        getSalario() { //metodo publico
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4);
const f2 = criarFuncionario('maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'ana'; 
console.log(filha);

//uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);