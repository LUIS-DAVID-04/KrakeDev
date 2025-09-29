calcularPromedioNotas = function(){
    let nota1 = recuperarFloat("txtnota1");
    let nota2 = recuperarFloat("txtnota2");
    let nota3 = recuperarFloat("txtnota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let promedioFlotante = promedio.toFixed(2);
    if(promedioFlotante < 5 && promedioFlotante > 0){
        let mensaje = "REPROBADO";
        mostrarTexto("txtRespuesta",mensaje);
        mostrarImgane("img","./imagenes/reprobado.gif");
        
    }else if (promedioFlotante >= 5 && promedioFlotante <= 8){
        let mensaje = "BUEN TRABAJO";
        mostrarTexto("txtRespuesta",mensaje);
        mostrarImgane("img","./imagenes/bueno.gif");
    }else if (promedioFlotante > 8 && promedioFlotante <=10){
        let mensaje = "EXCELENTE";
        mostrarTexto("txtRespuesta",mensaje);
        mostrarImgane("img","./imagenes/pasaste.gif");
    }else {
        let mensaje = "DATOS INCORRECTOS";
        mostrarTexto("txtRespuesta",mensaje);
        mostrarImgane("img","./imagenes/error.gif");
    }
}
