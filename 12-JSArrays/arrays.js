const nombres = ["Jorge", "Cesar", 23, true, ["Lee","Irving"]];
const nums= [];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2);
console.log(nombres[3]);
console.log(nombres[4]);
console.log(nombres);

//accediendo a arrays anidados//

console.log(nombres[4][0]);
console.log(nombres[4][1]);

//para conocer el tamaño de una array

console.log(nombres.length);
console.log(nums.length);

//modificar los valores
nombres[0]= "Shuri";
console.log(nombres[0]);

//agregar valores, al final
nombres.push("karla");
nombres.push("Tenya");
console.log(nombres);
console.log(nombres.slice(2,5));
const arrayNoms = nombres.slice(4);
console.log(arrayNoms);
nombres[4].push("Cesar");
console.log(nombres[4]);

//agregar valores al inicio del array
console.log(nombres.unshift("jesus", "oscarin"));
console.log(nombres);

//eliminar valores
/*nombres.length=0;
console.log(nombres);
console.log(nombres.length);*/

//va eliminando el último elemento//
console.log(nombres.pop());
console.log(nombres);
console.log(nombres.pop());

//va eliminando el primer elemento

console.log(nombres.shift());
console.log(nombres);