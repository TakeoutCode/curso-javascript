
function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuento = (precio * (100 - parseFloat(descuento))) / 100;
    return precioConDescuento;
} 

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const priceValue = parseInt(inputPrice.value);
    const discountValue = parseInt(inputDiscount.value);

    const priceWhitDiscount = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");

    if(priceWhitDiscount < 0) {
        resultP.innerHTML = "El porcentaje de descuento debe estar entre 0-100";
    } else if(priceWhitDiscount > priceValue) {
        resultP.innerHTML = "El porcentaje de descuento debe estar entre 0-100";
    } else if(isNaN(priceWhitDiscount)) {
        resultP.innerHTML = "Por favor introduce un valor";
    } else {
        resultP.innerHTML = `El precio con descuento es: ${priceWhitDiscount.toFixed(2)}`;
    }
    
}
