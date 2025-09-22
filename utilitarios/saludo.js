
saludar=function(){
    //Recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //Recuperar el valor de la caja de texto txtApellido
    let Apellido=recuperarTexto("txtApellido");
}
recuperarTexto=function(idComponente){
    let conmponente;
    let valorIngresado;
    conmponente=document.getElementById(idComponente);
    valorIngresado=conmponente.value; 
    return valorIngresado;
}