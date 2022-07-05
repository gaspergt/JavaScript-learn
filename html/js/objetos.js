//Declarcaion de un objeto.
let person = {
    nombre: 'Luis',
    apellido: 'Lima',
    email: 'llim@easygosa.net',
    edad: '22',
    CompleteName: function (){
        return this.nombre+''+this.apellido;
    }
}
//Tomar propiedad de un objeto
console.log(
    person['apellido']
);

//Recorrido de propiedades en objeto con For in
for ( PropiedadesDePerson in person){
    console.log(PropiedadesDePerson);
    console.log(person[PropiedadesDePerson]);
}

//Remover o adicionar propiedades a un objeto:
//agregar
person.tel = '4209-3868';
//remover
delete person.tel;

//Acceder a propiedades de un objeto:
let personArray = Object.values(
    person
);
console.log(personArray);

//Acceder a propiedades de un objeto:
let personSting = JSON.stringify(
    person
);
console.log(personSting);


//Declarcaion de un objeto.
let person = {
    nombre: 'Luis',
    apellido: 'Lima',
    email: 'llim@easygosa.net',
    edad: '22',
    nacionalidad: 'gt',
    get lang (){
        return this.nacionalidad.toUpperCase();
    },
    set lang (nacionalidad){
        this.nacionalidad = nacionalidad.toUpperCase();
    },
    CompleteName: function (){
        return this.nombre+''+this.apellido;
    }
}

//Metodos get y set, acceder y modificar un objeto
console.log(person.lang);
person.nacionalidad = 'es_gt';
console.log(person.lang);


//Metodo constructor de objetos
function Person( nombre,apellido,mail){
    this.name = nombre;
    this.surname = apellido;
    this.email = mail;
}
let padre = new Person(
    'Fernando', 
    'Hernandez', 
    'fhernandez@mail.com'
)
console.log(padre);
let madre = new Person(
    'Emilia',
    'Tix',
    'etix@mail.com'
)
console.log(madre);