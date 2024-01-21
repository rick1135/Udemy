function media(vet){
    let qtd=vet.length, media=0;

    for(let i=0; i<vet.length; i++){
        media+=vet[i];
    }

    console.log(`A média aritmétia dos valores é: ${media=media/qtd}`);
}

vetor = [1, 2, 3, 4, 5];
media(vetor);