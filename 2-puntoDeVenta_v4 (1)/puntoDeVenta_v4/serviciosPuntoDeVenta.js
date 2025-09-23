calcularValorDesvuento = function(monto,procentajeDescuento){
    let valorDelDescuento = (monto * procentajeDescuento) /100
    return valorDelDescuento;
}

calcularIVA = function(monto){
    let valorIVA = monto * 0.12;
    return valorIVA;
}

calcularSubtotal = function(precio,cantidad){
    let totalPagar = precio * cantidad;
    return totalPagar;
}

calcularTotal = function(subtotal,descuento,iva){
    let valorTotal = subtotal - descuento + iva;
    return valorTotal
}