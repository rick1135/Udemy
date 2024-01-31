const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            console.log('Depois de ler');
            resolve(conteudo.toString());
        });
    });
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho).then(conteudo => console.log(conteudo));
