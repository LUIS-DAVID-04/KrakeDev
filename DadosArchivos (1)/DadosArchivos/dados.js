jugar = function(){
    let aletarorio;
    aletarorio=lanzarDado();
    cambiarTexto("lblNumero", aletarorio);
    if(aletarorio>3){
        let mensaje = "Es mayor a 3 GANASTE !!";
        cambiarTexto("lblmensaje", mensaje);
    }else{
        let mensaje = "Es menor a 3 GAME OVER :(";
        cambiarTexto("lblmensaje", mensaje);
    }
}
//Crear una funcion llamada lanzar dado 
//No recibe parametros 
//Reyorna un numero aletarorio entre 1 y 6 
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // entre 0 y 1 
    numeroMultiplicado = aleatorio * 6;
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1;// entre 0 y 6
    return valorDado;
}

