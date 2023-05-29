function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}
    
console.log(inverso(true)); // retornará false
console.log(inverso("6")); // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(-2000)); // retornará 2000
console.log(inverso("programação")); // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"