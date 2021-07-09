const list = [];

function agregarUnElemento() {
    const inputModa = document.getElementById("InputModa")
    const modaValue = parseFloat(inputModa.value);

    if(isNaN(modaValue)) {
        const resultModa = document.getElementById("ResultModa");
        resultModa.innerHTML = "Por favor introdusca un valor";
    } else {
        list.push(modaValue);
        const listaUl = document.getElementById("ListaDeElementos");
        const listaLi = document.createElement("LI"); 
        listaLi.innerHTML = `${modaValue}`     
        listaUl.appendChild(listaLi);

        const numeroDeLi = document.getElementsByTagName("LI");
        listaLi.id = `IdNew${numeroDeLi.length}`;

        const resultModa = document.getElementById("ResultModa");
        resultModa.innerHTML = "";
    }
}

function eliminarUnElemento() {
    const inputModa = document.getElementById("InputModa")
    const modaValue = parseFloat(inputModa.value);

    if(isNaN(modaValue)) {
        const resultModa = document.getElementById("ResultModa");
        resultModa.innerHTML = "Por favor introdusca un valor";
    }else {
        const posicionElemento = `IdNew${modaValue}`;
        const ubicarId = document.getElementById(posicionElemento);

        if(ubicarId != null){
            list.splice(modaValue - 1, 1);
            let listaUl = document.getElementById("ListaDeElementos");
            const posicionElemento = `IdNew${modaValue}`;
            const elementoEliminar = document.getElementById(posicionElemento);
            listaUl.removeChild(elementoEliminar);
        
            let numeroDeLi = document.getElementsByTagName("LI").length;

            for (let i = 0; i <= numeroDeLi ; i++) {
                if(modaValue <= i){
                    const posicionElemento = `IdNew${i + 1}`;
                    const renombrarId = document.getElementById(posicionElemento);
                    renombrarId.setAttribute("id", `IdNew${i}`);

                }
            
            }
            const resultModa = document.getElementById("ResultModa");
            resultModa.innerHTML = "";
        } else {
            const resultModa = document.getElementById("ResultModa");
            resultModa.innerHTML = "Por favor introdusca un valor valido";
        }
        
        
    }
}


function calcularModa() {
    if (0 >= list ) {
        const resultModa = document.getElementById("ResultModa");
        resultModa.innerHTML = "Por favor introdusca un valor";
    } else {
        const lista1Count = {};

        list.map(
        function (elemento) {
            if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
            } else {
            lista1Count[elemento] = 1;
            }
        }
        );
    
        const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
        );
        const moda = lista1Array[lista1Array.length - 1];
        const resultModa = document.getElementById("ResultModa");
        resultModa.innerHTML = `La moda es: ${parseInt(moda[0])} se repite: ${moda[1]} veces`;
    }
}





