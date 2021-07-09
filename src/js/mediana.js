const list = [];

function agregarUnElemento() {
    const inputMediana = document.getElementById("InputMediana")
    const medianaValue = parseFloat(inputMediana.value);

    if(isNaN(medianaValue)) {
        const resultMediana = document.getElementById("ResultMediana");
        resultMediana.innerHTML = "Por favor introdusca un valor";
    } else {
        list.push(medianaValue);
        const listaUl = document.getElementById("ListaDeElementos");
        const listaLi = document.createElement("LI"); 
        listaLi.innerHTML = `${medianaValue}`     
        listaUl.appendChild(listaLi);

        const numeroDeLi = document.getElementsByTagName("LI");
        listaLi.id = `IdNew${numeroDeLi.length}`;

        const resultMediana = document.getElementById("ResultMediana");
        resultMediana.innerHTML = "";
    }
}

function eliminarUnElemento() {
    const inputMediana = document.getElementById("InputMediana")
    const medianaValue = parseFloat(inputMediana.value);

    if(isNaN(medianaValue)) {
        const resultMediana = document.getElementById("ResultMediana");
        resultMediana.innerHTML = "Por favor introdusca un valor";
    }else {
        const posicionElemento = `IdNew${medianaValue}`;
        const ubicarId = document.getElementById(posicionElemento);

        if(ubicarId != null){
            list.splice(medianaValue - 1, 1);
            let listaUl = document.getElementById("ListaDeElementos");
            const posicionElemento = `IdNew${medianaValue}`;
            const elementoEliminar = document.getElementById(posicionElemento);
            listaUl.removeChild(elementoEliminar);
        
            let numeroDeLi = document.getElementsByTagName("LI").length;

            for (let i = 0; i <= numeroDeLi ; i++) {
                if(medianaValue <= i){
                    const posicionElemento = `IdNew${i + 1}`;
                    const renombrarId = document.getElementById(posicionElemento);
                    renombrarId.setAttribute("id", `IdNew${i}`);

                }
            
            }
            const resultMediana = document.getElementById("ResultMediana");
            resultMediana.innerHTML = "";
        } else {
            const resultMediana = document.getElementById("ResultMediana");
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
    let mediana;
    const medianaOrdenada = list.sort(function (a, b) {return a - b});
    const mitadLista = parseInt(list.length / 2);
    const resultMediana = document.getElementById("ResultMediana");
    

    if (0 >= list ) {
        const resultMediana = document.getElementById("ResultMediana");
        resultMediana.innerHTML = "Por favor introdusca un valor";
    } else if(medianaOrdenada.length % 2 === 0) {
        const element1 = list[mitadLista - 1];
        const element2 = list[mitadLista];
        
        const promedio = calcularPromedio([
            element1,
            element2,
        ]);
        mediana = promedio;
        resultMediana.innerHTML = `La mediana es ${mediana}`;
  
    } else {
        mediana = list[mitadLista];
        resultMediana.innerHTML = `La mediana es ${mediana}`;
  
    }
}
