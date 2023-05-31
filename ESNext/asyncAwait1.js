function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Executando promise...');
            resolve();
        }, tempo);
    });
}

// await esperarPor(2000);
esperarPor(2000)
    .then(() => console.log('Executado promise 1...'))
    .then(() => esperarPor())
    .then(() => console.log('Executado promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executado promise 3...'));

async function executar(){
    await esperarPor(2000);
    console.log('Async/Await 1...');
    await esperarPor(2000);
    console.log('Async/Await 2...');
    await esperarPor(2000);
    console.log('Async/Await 3...');
}

executar();