
function calcularPromedio(list) {
    // let sumaList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumaList = sumaList + list[1];
    // }

    const sumaList = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    });

    const promedioList = sumaList / list.length;

    return promedioList;
} 


