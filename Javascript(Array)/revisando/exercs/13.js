function filtrar(x){
    const res = x.filter(x => typeof x=="number");
    console.log(res);
}

filtrar(["Java", 1, "3", "web", 20]);
filtrar(["Java", "3",]);