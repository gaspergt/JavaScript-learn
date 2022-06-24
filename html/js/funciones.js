//funciones
//Declaración de una  funcion 
function MyFfuncion (a,b) {
    console.log("Adición: "+(a+b));
}
//Llamado de funcion
MyFfuncion(2,3);

//Declaración de una  funcion 
function MyFfuncion (c,d) {
    return c + d;
}
//Llamado de funcion
let  result = MyFfuncion(2,3);
console.log(result);

//funcion de tipo expresión
let suma = function(j,k){
    return j+k
}
resultado = suma (2,2);
console.log(resultado)

//Funciones timpo  flecha 
const flechafuncion = (e,f) => e+f;
resultado = flechafuncion(3,5);
console.log(resultado);


//paso por referencia

const people = {
    nombre: "Luis",
    apellido: "Lima"
}
function cvalue2 (people){
    people.nombre = "Fernando";
    people.apellido = "Ixcuna";
}
cvalue2(people);
console.log(people);