const list = [];

function agregarUnElemento() {
    const inputMediana = document.getElementById("InputMediana")
    const medianaValue = parseInt(inputMediana.value);

    if(isNaN(medianaValue)) {
        const resultMediana = document.getElementById("ResultMeadiana");
        resultMediana.innerHTML = "Por favor introdusca un valor"
    } else {
        list.push(medianaValue);
        const listaUl = document.getElementById("ListaDeElementos");
        const listaLi = document.createElement("LI"); 
        listaLi.innerHTML = `${medianaValue}`     
        listaUl.appendChild(listaLi);

        const numeroDeLi = document.getElementsByTagName("LI");
        listaLi.id = `IdNew${numeroDeLi.length}`;

        const resultMediana = document.getElementById("ResultMeadiana");
        resultMediana.innerHTML = "";
    }
}

function eliminarUnElemento() {
    const inputMediana = document.getElementById("InputMediana")
    const medianaValue = parseInt(inputMediana.value);

    if(isNaN(medianaValue)) {
        const resultMediana = document.getElementById("ResultMeadiana");
        resultMediana.innerHTML = "Por favor introdusca un valor"
    }else {
        const posicionElemento = `IdNew${medianaValue}`;
        const ubicarId = document.getElementById(posicionElemento);
        console.log(ubicarId);

        if(ubicarId != null){
            list.splice(medianaValue - 1);

            const listaUl = document.getElementById("ListaDeElementos");
            const posicionElemento = `IdNew${medianaValue}`;
            const elementoEliminar = document.getElementById(posicionElemento);
            console.log(elementoEliminar);
            listaUl.removeChild(elementoEliminar);
        
            const numeroDeLi = document.getElementsByTagName("LI").length;
            console.log(numeroDeLi);


            for (let i = 0; i <= numeroDeLi ; i++) {
                console.log(i);
                if(medianaValue <= i){
                    const posicionElemento = `IdNew${i + 1}`;
                    const renombrarId = document.getElementById(posicionElemento);
                    console.log(renombrarId);
                    renombrarId.setAttribute("id", `IdNew${i}`);

                }
            
            }
            const resultMediana = document.getElementById("ResultMeadiana");
            resultMediana.innerHTML = "";
        } else {
            const resultMediana = document.getElementById("ResultMeadiana");
            resultMediana.innerHTML = "Por favor introdusca un valor valido";
        }
        
        
    }
}


function calcularPromedio(list1) {

    const sumaList = list1.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    });

    const promedioList = sumaList / list1.length;

    return promedioList;
} 


function calcularMediana() {
    console.log(list)
    let mediana;
    const medianaOrdenada = list.sort(function (a, b) {return a - b});
    console.log(medianaOrdenada);
    const mitadLista = parseInt(list.length / 2);
    const resultMediana = document.getElementById("ResultMeadiana");
    
    if(medianaOrdenada.length % 2 === 0) {
        const element1 = list[mitadLista - 1];
        const element2 = list[mitadLista];
        
        const promedio = calcularPromedio([
            element1,
            element2,
        ]);
        mediana = promedio;
        resultMediana.innerHTML = `la mediana es ${mediana}`;
        return mediana;
    } else {
        mediana = list[mitadLista];
        resultMediana.innerHTML = `la mediana es ${mediana}`;
        return mediana;
    }
}
