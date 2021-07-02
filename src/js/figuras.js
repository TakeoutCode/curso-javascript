// Helpers
function valorInvalido() {
    const resultMediana = document.getElementById("Results");
    resultMediana.innerHTML = "Por favor introdusca un valor";
}

function validarTrianguloI(valueL1, valueL2, valueB) {
    if(isNaN(valueL1) || isNaN(valueL2) || isNaN(valueB) ) {
        valorInvalido();
    }else {
        if(valueL1 === valueL2) {
            if(valueL1 === valueB) {
                const resultMediana = document.getElementById("Results");
                resultMediana.innerHTML = "los lados no deben ser iguales a la base";
            } else {
                return true;
            }
        } else {
            const resultMediana = document.getElementById("Results");
            resultMediana.innerHTML = "los lados deben ser iguales";
        }
    } 
}

function alturaTrianguloI(lado1, base) {
    const altura =  Math.sqrt((lado1 ** 2) - (base ** 2));
    return altura
}

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

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);
    if(isNaN(value)) {
        valorInvalido();
    }else {
        const perimetro = value * 4;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del cuadrado es: ${perimetro.toFixed(4)}`;
    }
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);

    if(isNaN(value)) {
        valorInvalido();
    }else {
        const area = value ** 2;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El area del cuadrado es: ${area.toFixed(4)}`;
    }
}



// Triangulo Equilatero

function calcularPerimetroTrianguloE() {
    const input = document.getElementById("InputTrianguloE");
    const value = parseFloat(input.value);
    
    if(isNaN(value)) {
        valorInvalido();
    }else {
        const perimetro = value * 3;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del triangulo equilatero es: ${perimetro.toFixed(4)}`;
    }
    
}

function calcularAreaTrianguloE() {
    const input = document.getElementById("InputTrianguloE");
    const value = parseFloat(input.value);

    if(isNaN(value)) {
        valorInvalido();
    }else {
        const area = (Math.sqrt(3)) * (value ** 2) / 4;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El area del triangulo equilatero es: ${area.toFixed(4)}`;
    }

}

// Triangulo Isosceles

function calcularPerimetroTrianguloI() {
    const inputLado1 = document.getElementById("InputTrianguloIL");
    const inputLado2 = document.getElementById("InputTrianguloIR");
    const inputBase =  document.getElementById("InputTrianguloIB");

    const valueL1 = parseFloat(inputLado1.value);
    const valueL2 = parseFloat(inputLado2.value);
    const valueB = parseFloat(inputBase.value);
    
    const validacion = validarTrianguloI(valueL1, valueL2, valueB);

    if(validacion == true) {
        const perimetro = valueL1 + valueL2 + valueB;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del triangulo isosceles es: ${perimetro.toFixed(4)}`;
    } 
}

function calcularAlturaTrianguloI() {
    const inputLado1 = document.getElementById("InputTrianguloIL");
    const inputLado2 = document.getElementById("InputTrianguloIR");
    const inputBase =  document.getElementById("InputTrianguloIB");

    const valueL1 = parseFloat(inputLado1.value);
    const valueL2 = parseFloat(inputLado2.value);
    const valueB = parseFloat(inputBase.value);

    const validacion = validarTrianguloI(valueL1, valueL2, valueB);
    
    if(validacion == true) {
        const altura = alturaTrianguloI(valueL1, valueB);
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del triangulo isosceles es: ${altura.toFixed(4)}`;
    } 
    
    
}

function calcularAreaTrianguloI() {
    const inputLado1 = document.getElementById("InputTrianguloIL");
    const inputLado2 = document.getElementById("InputTrianguloIR");
    const inputBase =  document.getElementById("InputTrianguloIB");

    const valueL1 = parseFloat(inputLado1.value);
    const valueL2 = parseFloat(inputLado2.value);
    const valueB = parseFloat(inputBase.value);

    const validacion = validarTrianguloI(valueL1, valueL2, valueB);
    
    if(validacion == true) {
        const altura = alturaTrianguloI(valueL1, valueB);
        const area = (altura * valueB) / 2;
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del triangulo isosceles es: ${area.toFixed(4)}`;
    } 

    
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseFloat(input.value);

    if(isNaN(value)) {
        valorInvalido();
    }else {
        const perimetro = perimetroCirculo(value);
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El perimetro del circulo es: ${perimetro.toFixed(4)}`;
    }
    
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = parseFloat(input.value);

    if(isNaN(value)) {
        valorInvalido();
    }else {
        const area = areaCirculo(value);
        const resultMediana = document.getElementById("Results");
        resultMediana.innerHTML = `El area del circulo es: ${area.toFixed(4)}`;
    }
}





