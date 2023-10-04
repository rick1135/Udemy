const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2)); 

const avaliacao1 = 3.231321;
const avaliacao2 = 3.32423;

const total = avaliacao1 * peso1+avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed(2) = 2 casas decimais
console.log(media.toString(2)); // toString(2) = converte em binário

console.log(typeof media); // typeof = tipo de dado