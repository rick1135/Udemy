function definir(vet){
    let maior=0, menor=99999;

    for(let i=0; i<vet.length; i++){
        if(vet[i]>maior) maior=vet[i];
        if(vet[i]<menor) menor=vet[i];
    }
    
    console.log(`O maior número é ${maior} e o menor ${menor}`);
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];
definir(vetor);