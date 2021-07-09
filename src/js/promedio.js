const list = [];

function agregarUnElemento() {
    const inputPromedio = document.getElementById("InputPromedio")
    const promedioValue = parseFloat(inputPromedio.value);

    if(isNaN(promedioValue)) {
        const resultPromedio = document.getElementById("ResultPromedio");
        resultPromedio.innerHTML = "Por favor introdusca un valor";
    } else {
        list.push(promedioValue);
        const listaUl = document.getElementById("ListaDeElementos");
        const listaLi = document.createElement("LI"); 
        listaLi.innerHTML = `${promedioValue}`     
        listaUl.appendChild(listaLi);

        const numeroDeLi = document.getElementsByTagName("LI");
        listaLi.id = `IdNew${numeroDeLi.length}`;

        const resultPromedio = document.getElementById("ResultPromedio");
        resultPromedio.innerHTML = "";
    }
}

function eliminarUnElemento() {
    const inputPromedio = document.getElementById("InputPromedio")
    const promedioValue = parseFloat(inputPromedio.value);

    if(isNaN(promedioValue)) {
        const resultPromedio = document.getElementById("ResultPromedio");
        resultPromedio.innerHTML = "Por favor introdusca un valor";
    }else {
        const posicionElemento = `IdNew${promedioValue}`;
        const ubicarId = document.getElementById(posicionElemento);

        if(ubicarId != null){
            list.splice(promedioValue - 1, 1);
            let listaUl = document.getElementById("ListaDeElementos");
            const posicionElemento = `IdNew${promedioValue}`;
            const elementoEliminar = document.getElementById(posicionElemento);
            listaUl.removeChild(elementoEliminar);
        
            let numeroDeLi = document.getElementsByTagName("LI").length;

            for (let i = 0; i <= numeroDeLi ; i++) {
                if(promedioValue <= i){
                    const posicionElemento = `IdNew${i + 1}`;
                    const renombrarId = document.getElementById(posicionElemento);
                    renombrarId.setAttribute("id", `IdNew${i}`);

                }
            
            }
            const resultPromedio = document.getElementById("ResultPromedio");
            resultPromedio.innerHTML = "";
        } else {
            const resultPromedio = document.getElementById("ResultPromedio");
            resultPromedio.innerHTML = "Por favor introdusca un valor valido";
        }
        
        
    }
}


function calcularPromedio() {
    if (0 >= list ) {
        const resultPromedio = document.getElementById("ResultPromedio");
        resultPromedio.innerHTML = "Por favor introdusca un valor";
    } else {
        const sumaList = list.reduce((valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        });

        const promedioList = sumaList / list.length;
        const resultPromedio = document.getElementById("ResultPromedio");
        resultPromedio.innerHTML = `El promedio es: ${promedioList.toFixed(4)}`;
    }
} 


