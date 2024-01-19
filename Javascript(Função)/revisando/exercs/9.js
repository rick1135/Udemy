function nota (n){
    if (n<38){
        return console.log(`Reprovado com ${n}`);
    }
    let r = n%5;
    if (r>=3){
        n+=5-r;
    }
    return console.log(`Aprovado com ${n}`);
}

nota(38);
nota(37);
nota(88);
nota(61);
nota(69);