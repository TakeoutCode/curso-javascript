const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map((element) => {
    if(lista1Count[element]){
        lista1Count[element] += 1;
    } else {
        lista1Count[element] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort((valorAcumulado, nuevoValor) => {
    return valorAcumulado[1] - nuevoValor[1];
});

const moda = lista1Array[lista1Array.length - 1];