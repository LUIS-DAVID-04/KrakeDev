
saludar = function(){
    //Recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //Recuperar el valor de la caja de texto txtApellido
    let Apellido=recuperarTexto("txtApellido");
    //Recuperar el valor de la caja de texto txtEdad
    let edad = recuperarInt("txtedad");
    //Recuperar el valor de la caja de texto txtEstatura 
    let estatura = recuperarFloat("txtestatura");
    let mensajeBienvenida="Bienvenido " + nombre +" " + Apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
}
mostrarTexto = function(idComponente,mensaje){
    let conmponente;
    conmponente=document.getElementById(idComponente);
    conmponente.innerText = mensaje;

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