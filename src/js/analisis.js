// Helpers
const list = [];


function agregarUnElemento() {
    const inputNombre = document.getElementById("InputNombre")
    const nombreValue = inputNombre.value;
    const inputSalarios = document.getElementById("InputSalarios")
    const salariosValue = parseFloat(inputSalarios.value);

    if(!isNaN(nombreValue) || isNaN(salariosValue)) {
        const resultSalarios = document.getElementById("ResultSalarios");
        resultSalarios.innerHTML = "Por favor introdusca un valor";
    } else {
        list.push({
            name: nombreValue,
            salary: salariosValue,
        });
        const listaUl = document.getElementById("ListaDeElementos");
        const listaLi = document.createElement("LI"); 
        listaLi.innerHTML = `nombre: ${nombreValue}   salario: ${salariosValue}`;
        listaUl.appendChild(listaLi);

        const numeroDeLi = document.getElementsByTagName("LI");
        listaLi.id = `IdNew${numeroDeLi.length}`;

        const resultMediana = document.getElementById("ResultSalarios");
        resultMediana.innerHTML = "";
    }
}

function eliminarUnElemento() {
    const inputSalarios = document.getElementById("EliminarElemento")
    const salariosValue = parseFloat(inputSalarios.value);

    if(isNaN(salariosValue)) {
        const resultSalarios = document.getElementById("ResultSalario");
        resultSalarios.innerHTML = "Por favor introdusca un valor";
    }else {
        const posicionElemento = `IdNew${salariosValue}`;
        const ubicarId = document.getElementById(posicionElemento);

        if(ubicarId != null){
            list.splice(salariosValue - 1, 1);
            let listaUl = document.getElementById("ListaDeElementos");
            const posicionElemento = `IdNew${salariosValue}`;
            const elementoEliminar = document.getElementById(posicionElemento);
            listaUl.removeChild(elementoEliminar);
        
            let numeroDeLi = document.getElementsByTagName("LI").length;

            for (let i = 0; i <= numeroDeLi ; i++) {
                if(salariosValue <= i){
                    const posicionElemento = `IdNew${i + 1}`;
                    const renombrarId = document.getElementById(posicionElemento);
                    renombrarId.setAttribute("id", `IdNew${i}`);

                }
            
            }
            const resultSalarios = document.getElementById("ResultSalarios");
            resultSalarios.innerHTML = "";
        } else {
            const resultSalarios = document.getElementById("Resultalarios");
            resultSalarios.innerHTML = "Por favor introdusca un valor valido";
        }
        
        
    }
}


function esPar(numero) {
    return  (numero % 2 === 0);
}

function calcularMediaAritmetica(list) {
    const sumaLista = list.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / list.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(list) {
    const mitad = parseInt(list.length / 2);

    if (esPar(list.length)) {
        const personaMitad1 = list[mitad - 1];
        const personaMitad2 = list[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = list[mitad];
        return personaMitad;
    }
}

// Mediana General


function calcularMediana() {
    if (0 >= list ) {
        const resultSalarios = document.getElementById("ResultSalarios");
        resultSalarios.innerHTML = "Por favor introdusca un valor";
    } else {
        const salarioCol = list.map((persona) => {
            return persona.salary;
        });
        
        const salariosColSorted = salarioCol.sort((salarioA,  salarioB) => {
            return salarioA - salarioB;
        });
        const medianaGeneralCol =  medianaSalarios(salariosColSorted);
        const resultSalarios = document.getElementById("ResultSalarios");
        resultSalarios.innerHTML = `La mediana general es: ${medianaGeneralCol}`;
    }
}


// Mediana del top 10%




function calcularTop10() {
    if (0 >= list ) {
        const resultSalarios = document.getElementById("ResultSalarios");
        resultSalarios.innerHTML = "Por favor introdusca un valor";
    } else {
        const salarioCol = list.map((persona) => {
            return persona.salary;
        });
        
        const salariosColSorted = salarioCol.sort((salarioA,  salarioB) => {
            return salarioA - salarioB;
        });
        const spliceStart = (salariosColSorted.length  * 90) / 100;
        const spliceCount = salariosColSorted.length - spliceStart;
        const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
        const medianaTop10Col =  medianaSalarios(salariosColTop10);
        const resultSalarios = document.getElementById("ResultSalarios");
        resultSalarios.innerHTML = `La mediana del top 10 es: ${medianaTop10Col}`;
    }

}
