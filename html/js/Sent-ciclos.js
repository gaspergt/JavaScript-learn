//Sentencias if and else
let cond  = true;
if (cond) {
    console.log("Condicion verdadera");
}
else {
    console.log("Condicion falsa");
}

//Numero a texto
let num1 = 8;
if (num1 == 1) {
    console.log("Numero uno");
}
else if (num1 == 2) {
    console.log("Numero dos");
}
else if (num1 == 3) {
    console.log("Numero tres");
}
else if (num1 == 4) {
    console.log("Numero cuatro");
}
else  {
    console.log("Numero desconocido");
}

//Estaciones del año
let mes = 4;
let estacion;
if (mes == 1 || mes == 2 || mes == 12) {
    estacion  = "Invierno";
}
else if ( mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
}
else if ( mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
}
else if ( mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
}
else {
    estacion = "No es valido"
}
console.log(estacion);

//Horas
let hora = 6;
let estado;
if (hora >= 6 && hora <= 11){
    estado = "Buen día";
}
else if (hora >= 12 && hora <= 18){
    estado = "Buena tarde";
}
else if (hora >= 19 && hora <= 24){
    estado = "Buena noche";
}
else if (hora >= 0 && hora < 6){
    estado = "Durmiendo";
}
console.log(estado);

//Switch
let n10 = 2;
let vTxt = "Valor desconocido";
switch(n10){
    case 1:
        vTxt = "Numero 1";
        break;
        case 2:
            vTxt = "Numero 2";
            break;
            case 3:
                vTxt = "Numero 3";
                break;
                default:
                    vTxt = "Valor no encontrado"
}
console.log(vTxt);