calcularPromedioNotas = function(){
    let nota1 = recuperarFloat("txtnota1");
    let nota2 = recuperarFloat("txtnota2");
    let nota3 = recuperarFloat("txtnota3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let promedioFlotante = promedio.toFixed(2);
    if(promedioFlotante>7){
        mostrarImgane("img","./imagenes/pasaste.gif");
        
    }else{
        mostrarImgane("img","./imagenes/reprobado.gif");
    }

}
