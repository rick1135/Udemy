function lerVet(vet){
    let par=0, impar=0;

    for(let i=0; i<vet.length; i++){
        if(vet[i]%2==0) par++;
        else impar++;
    }

    console.log(`O vetor tem ${par} números pares e ${impar} ímpares`);
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
lerVet(vetor);