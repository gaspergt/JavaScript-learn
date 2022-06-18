//ciclos
//While
let cont = 0;
while(cont < 3) {
    console.log(cont);
    cont++;
}
console.log("Fin while");

//do While
let conT = 0;
do {
    console.log(conT);
    conT++;
}
while(conT < 3);
console.log("Final de ciclo");

//for
for (let cont2 = 0; cont2 < 3; cont2++){
    console.log(cont2);
}
console.log("Fin para for");

//Romper un ciclo
for(let cont3 = 0; cont3 <= 11; cont3++){
    if (cont3 % 2 == 0){
        console.log(cont3);
        break;
    }
}
console.log("Fin, roptura de ciclo")

//continue
for (let contador1 = 0; contador1 <= 12; contador1++){
    if(
        contador1 % 2 !== 0 ){
            continue;
        }
    else {
        console.log(contador1);
    }
}

