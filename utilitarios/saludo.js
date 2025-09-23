
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

    mostrarImgane("imgSaludo","./Imagenes/homer.gif")

    mostrarTextoEnCaja("txtNombre"," ");
}
