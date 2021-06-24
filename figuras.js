// Codigo del cuadrado

console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);


function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado(29);
// console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado} cm`);

function areaCuadrado(lado) {
    return lado ** 2;
}
// console.log(`El area del cuadrado miden: ${areaCuadrado} cm^2`);

console.groupEnd();

// Codigo del triangulo

console.group("triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 5;
// const alturaTriangulo= 5.5;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm`);
// console.log(`La altura del triangulo mide: ${baseTriangulo} cm`);


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);

function  areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log(`El area del triangulo miden: ${areaTriangulo} cm^2`);

console.groupEnd();

// Codigo del circulo
console.group("circulos");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo} cm`);


// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


// PI
const PI = Math.PI;

// Circunferencia 
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area
function areaCirculo(radio) {

    return (radio ** 2) * PI;
}



console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}