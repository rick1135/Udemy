function multiplica(vet, num){
    let res = [];
    for(let i=0; i<vet.length; i++){
        res.push(vet[i]*num);
    }
    console.log(res);
}

function multiplicaSe(vet, num){
    let res = [];
    if(num>5){
        for(let i=0; i<vet.length; i++){
            res.push(vet[i]*num);
        }
        console.log(res);
    }
    else console.log('Número informado não é maior que 5');
}

multiplica([1, 2, 3, 4], 3);
multiplicaSe([1, 2, 3, 4], 3);
multiplicaSe([1, 2, 3, 4], 5);
multiplicaSe([1, 2, 3, 4], 6);