let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Rick');
console.log(aprovados);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2');
console.log(aprovados);
