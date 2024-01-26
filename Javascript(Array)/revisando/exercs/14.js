function objArr(obj){
    const chaves = Object.keys(obj);
    const res = chaves.map(chaves => [chaves, obj[chaves]]);
    console.log(res);
}

objArr({nome: "maria", profissao: "Dev"});