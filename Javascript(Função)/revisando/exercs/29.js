function intervalo(vet){
    let dentro=0, fora=0;

    for(let i=0; i<vet.length; i++){
        if(vet[i]>=10 && vet[i]<=20) dentro++;
        else fora++;
    }

    console.log(`O vetor tem ${dentro} números dentro do intervalo e ${fora} fora`);
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];
intervalo(vetor);