const valores = [7.7, 8.9, 6.3, 9.2]; // Array é um objeto
console.log(valores[0], valores[3]); // Acessando os valores do array
console.log(valores[4]); // Acessando um valor inexistente do array

valores[4] = 10; // Adicionando um valor ao array
console.log(valores);
console.log(valores.length); // Quantidade de elementos do array

valores.push({id: 3}, false, null, 'teste'); // Adicionando valores ao array
console.log(valores);

console.log(valores.pop()); // Retirando o último valor do array
delete valores[0]; // Deletando um valor do array
console.log(valores);

console.log(typeof valores);