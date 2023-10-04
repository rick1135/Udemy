const prod1 = {};
prod1.nome = 'celular novo';
prod1.preco = 2357.90;
prod1['desconto legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa polo",
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2);