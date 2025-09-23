mostrarTexto = function(idComponente,mensaje){
    let conmponente;
    conmponente=document.getElementById(idComponente);
    conmponente.innerText = mensaje;

}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let conmponente;
    conmponente=document.getElementById(idComponente);
    conmponente.value = mensaje;
}
mostrarImgane = function(idComponente,rutaImg){
    let conmponente;
    conmponente=document.getElementById(idComponente);
    conmponente.src = rutaImg;
}
recuperarTexto = function(idComponente){
    let conmponente;
    let valorIngresado;
    conmponente=document.getElementById(idComponente);
    valorIngresado=conmponente.value; 
    return valorIngresado;
}
recuperarInt = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorDecimal=parseFloat(valorCaja);
    return valorDecimal
}