function neg(vet){
    let qtd=0;

    for(let i=0; i<vet.length; i++){
        if(vet[i]<0) qtd++;
    }

    console.log(`O vetor contém ${qtd} números negativos`);
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
neg(vetor);