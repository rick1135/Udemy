function pa(n, a1, r){
    for (let i=0; i<n; i++) {
        console.log(a1 + r*i);
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2);  
}

function pg(n, a1, r){
    for(let i=0; i<n; i++){
        console.log(a1*(r**i));
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1));
}

pa(10, 10, 15);
console.log('----------------');
pg(10, 5, 3);