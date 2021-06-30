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


function perimetroTrianguloE(lado) {
    return lado * 3;
}
// console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);

function  areaTrianguloE(lado) {
    return (Math.sqrt(3 * lado)) / 2;
}

function perimetroTrianguloI(lado1, lado2, base) {
    if(lado1 === lado2) {
        if(lado1 == base) {
            
            const contenedor = document.getElementById("error");
            const item = document.createElement("P");
            const textNode = document.createTextNode("los lados no pueden ser igual a la base");
            contenedor.appendChild(item);
            item.appendChild(textNode);
        } else {
            const perimetro = lado1 + lado2 + base;
            return perimetro
        }
    }else {
        const contenedor = document.getElementById("error");
        const item = document.createElement("P");
        const textNode = document.createTextNode("los lados deben ser iguales");
        contenedor.appendChild(item);
        item.appendChild(textNode);
    }
}
// console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);

function  areaTrianguloI(base, altura) {
    return (base * altura) / 2;
}

function  alturaTrianguloI(lado1, lado2, base) {
    if(lado1 === lado2) {
        if(lado1 == base) {
            
            const contenedor = document.getElementById("error");
            const item = document.createElement("P");
            const textNode = document.createTextNode("los lados no pueden ser igual a la base");
            contenedor.appendChild(item);
            item.appendChild(textNode);
        } else {
            const altura =  Math.sqrt((lado1 ** 2) - (base ** 2));
            return altura;
        }
    }else {
        const contenedor = document.getElementById("error");
        const item = document.createElement("P");
        const textNode = document.createTextNode("los lados deben ser iguales");
        contenedor.appendChild(item);
        item.appendChild(textNode);
    }
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

function calcularPerimetroTrianguloE() {
    const input = document.getElementById("InputTrianguloE");
    const value = input.value;

    const perimetro = perimetroTrianguloE(value);
    alert(perimetro);
}

function calcularAreaTrianguloE() {
    const input = document.getElementById("InputTrianguloE");
    const value = input.value;

    const area = areaTrianguloE(value);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroTrianguloI() {
    const input = document.getElementById("InputTrianguloIL");
    const input2 = document.getElementById("InputTrianguloIR");
    const input3 = document.getElementById("InputTrianguloIB");

    const value = parseFloat(input.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);

    const perimetro = perimetroTrianguloI(value, value2, value3);
    if(perimetro != undefined) {
        alert(perimetro.toFixed(4));
    }else {
        alert("error")
    }
    
}



function calcularAreaTrianguloI() {
    const input = document.getElementById("InputTrianguloIL");
    const input2 = document.getElementById("InputTrianguloIR");
    const input3 = document.getElementById("InputTrianguloIB");

    const value = parseFloat(input.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);

    const altura = calcularAlturaTrianguloI(value, value2, value3);

    const area = areaTrianguloI(value3, altura);
    alert(area.toFixed(4));
}

function calcularAlturaTrianguloI() {
    const input = document.getElementById("InputTrianguloIL");
    const input2 = document.getElementById("InputTrianguloIR");
    const input3 = document.getElementById("InputTrianguloIB");

    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const altura = alturaTrianguloI(value, value2, value3);

    if(isNaN(altura)){
        return alert("la base debe ser menor a los lados");
    }else if (altura == undefined) {
        return alert("los lados no pueden ser iguales a la base")
    }else {
        alert(`la altura es ${altura.toFixed(4)}`);
        return altura
    }
    
    
}

