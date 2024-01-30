for (let letra of "Rick") console.log(letra);

console.log('-------');

const assuntos = ['map', 'set', 'promise'];
for (let i in assuntos) console.log(i);

console.log('-------');


for (let assunto of assuntos) console.log(assunto);

console.log('-------');

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
]);

for (let assunto of assuntosMap) console.log(assunto);
for (let chave of assuntosMap.keys()) console.log(chave);
for (let valor of assuntosMap.values()) console.log(valor);
for(let[ch, vl] of assuntosMap.entries()) console.log(ch, vl);

console.log('-------');

