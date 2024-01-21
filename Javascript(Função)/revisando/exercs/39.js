function troca(vetA, vetB){
    if(vetA.length===vetB.length){
        for(let i=0; i<vetA.length; i++){
            vetA[i] = vetA[i] + vetB[i];
            vetB[i] = vetA[i] - vetB[i];
            vetA[i] = vetA[i] - vetB[i];
        }
    }
    else console.log('Vetores de tamanhos diferentes');

    console.log('Vetor A após trocas:' + vetA);
    console.log('Vetor B após trocas:' + vetB);
}

let vet1 = [1, 2, 3];
let vet2 = [5, 6, 7];

troca(vet1, vet2);
troca(vet2, vet1);
