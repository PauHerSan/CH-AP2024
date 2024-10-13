const info ={
    nombre: "josue",
    apellido: "cano",
    edad: 30,
    isAlive: true,
    favoriteAnimals:[ "tortuga", "capibaras", "chitas"],
    //suma: (a,b) => a+b,// //método//
}
const cosas ={};

//notación de punto para obtener los valores de nuestro objeto

console.log(info.apellido);
console.log(info.edad);
console.log(info.favoriteAnimals[1]);
console.log(info);

//para agregar nuevas cosas.

info.favoriteSong ="navigate";
console.log(info);

//para borrar cosas

delete info.edad;
console.log(info);

//entries, regresa array con propiedades del objeto//

console.log(Object.entries(info));