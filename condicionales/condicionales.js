calcularTasaInteres=function(ingresoAnual){
    let valorDeLaTasa;
    if (ingresoAnual < 300000) {
        valorDeLaTasa = ingresoAnual * 0.16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        valorDeLaTasa = ingresoAnual * 0.15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        valorDeLaTasa = ingresoAnual * 0.14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        valorDeLaTasa = ingresoAnual * 0.13;
    } else if (ingresoAnual >= 2000000) {
        valorDeLaTasa = ingresoAnual * 0.12;
    }
    return valorDeLaTasa;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota;
    let saldoDisponible = egresos-ingresos;
    if(edad > 50){
        valorCuota = saldoDisponible * 0.30;

    }else if(edad <= 50){
        valorCuota = saldoDisponible * 0.40;
    }
    return valorCuota;
}

calcularDecuento=function(precio,cantidad){
    let valorApagar = precio*cantidad;
    if(cantidad < 3){
        valorApagar=precio;
    }else if(cantidad >= 3 && cantidad <= 5){
        valorApagar=precio * 0.02;
    }else if(cantidad >= 6 && cantidad <= 11){
        valorApagar=precio * 0.03;
    }else if(cantidad >= 12){
        valorApagar = precio * 0.04;
    }
    return valorApagar;
}

determinarColesterol=function(nivelColesterol){
    if (nivelColesterol < 100) {
        return "Colesterol optimo menos de 100 LDL";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Colesterol casi optimo por encima de lo optimo 100 - 129 LDL";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Colesterol un poco alto 130 - 159 LDL";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Colesterol alto 160 - 189 LDL";
    } else if (nivelColesterol >= 190) {
        return "Colesterol muy alto 190 LDL o mas";
    } else {
        return "Valor incorrecto";
    }
}

validadClave=function(clave){
    if(clave.length < 8){
        return false;
    }else if(clave.length > 16){
        return false;
    }else{
        return true;
    }
}

esMayuscula=function(caracter){
    let codigo = caracter.charCodeAt(0);
    if(codigo>= 65 && codigo <= 90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigo = caracter.charCodeAt(0);
    if(codigo>= 97 && codigo <= 122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigo = caracter.charCodeAt(0);
    if(codigo>= 48 && codigo <= 57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematicas,notaFisica,notaGeometria){
    if(notaMatematicas > 90){
        return true;
    }else if(notaFisica > 90){
        return true;
    }else if(notaGeometria > 90){
        return true;
    }else{
        return false;
    }

}

otorgarPermiso=function(notaMatematicas,notaFisica,notaGeometria){
    if(notaMatematicas > 90 || notaFisica > 90){
        return true;
    }else if(notaGeometria > 80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematicas,notaFisica,notaGeometria){
    if(notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90 || notaFisica > notaMatematicas){
        return true;
    }else {
        return false;
    }
}