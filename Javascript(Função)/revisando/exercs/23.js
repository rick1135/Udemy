function calcMedia (cdg, n1, n2, n3){
    let notas = [];
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b) => a < b ? 1 : -1);
    
    media=(notas[0]*4+notas[1]*3+notas[2]*3)/10;

    if(media>=5) console.log(`Aluno ${cdg} foi APROVADO com média ${media}`);
    else console.log(`Aluno ${cdg} foi REPROVADO com média ${media}`);
}

calcMedia(1,6,6,6);
calcMedia(2,4,6,6);
calcMedia(2,4,5,6);
calcMedia(2,4,5,3);