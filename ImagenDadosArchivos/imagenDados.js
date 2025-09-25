let puntos = 0;
let lanzamientos = 5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamiento(resultado);
   
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    if(puntos > 20){
        cambiarTexto("Resultado", "GANASTE!!!");
    }
}

modificarLanzamiento = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblIntentos", lanzamientos);
    if(lanzamientos < -1){
        cambiarTexto("Resultado", "GAME OVER :(");
    }
}

limpiar = function(){
    lanzamientos = 5;
    cambiarTexto("lblIntentos", lanzamientos);
    puntos = 0;
    cambiarTexto("lblPuntos", puntos);

    cambiarTexto("Resultado", "  ");

}


//Funcion mostrar cara que recibe como funcion el numero que quiere mostrar 
//Muestra a imagen correspondiente la imagen correspondiente al umero que recibe 
//No retorna nada
mostrarCara = function (numero){
    if(numero == 1){
        cambiarImagen("img","dados1.png");
    }else if(numero == 2){
        cambiarImagen("img","dados2.png");
    }else if(numero == 3){
        cambiarImagen("img","dados3.png");
    }else if(numero == 4){
        cambiarImagen("img","dados4.png");
    }else if(numero == 5){
        cambiarImagen("img","dados5.png");
    }else if(numero == 6){
        cambiarImagen("img","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}