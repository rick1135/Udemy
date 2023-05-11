function triangulo(x, y, z){
    if (x == y && y == z){
        console.log("Triângulo Equilátero");
    } else if (x == y || y == z || x == z){
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
}

triangulo(1,1,1);
triangulo(1,1,2);
triangulo(1,2,3);
triangulo(1,2,1);
triangulo(1,3,2);