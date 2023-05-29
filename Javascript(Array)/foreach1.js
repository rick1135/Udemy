const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// forEach() é uma função de callback que percorre o array e executa uma função para cada elemento
// o primeiro parâmetro é o elemento, o segundo é o índice e o terceiro é o array
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});
console.log('----------------------');

// forEach() com arrow function
aprovados.forEach(nome => console.log(nome));
console.log('----------------------');

// forEach() com arrow function e template string
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);
console.log('----------------------');