

class Animales{
    Edad;
    tamaño;
    especie;
    edad;
    nombre;
    cola;
    sonidos;
    //Metodo constructor//
    constructor(edad, tamaño, especie, nombre, cola, sonidos){
        this.edad = edad;
        this.tamaño = tamaño;
        this.especie = especie;
        this.nombre = nombre;
        this.cola = cola;
        this.sonidos = sonidos;
    }
    //setters y getters, se necesita seguir el ORDEEENN//
    
    set setEdad(nuevoEdad){
        this.edad = nuevoEdad;
    }
    
    get getEdad(){
        return this.edad;
    }
    
    set setTamaño(nuevoTamaño){
        this.tamaño = nuevoTamaño;
    }
    
    get getTamaño(){
        return this.tamaño;
    }
    
    set setEspecie(nuevoEspecie){
        this.especie = nuevoEspecie;
    }
    
    get getEspecie(){
        return this.especie;
    }
    
    
    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    
    get getNombre(){
        return this.nombre;
    }
    
    set setCola(nuevoCola){
        this.cola = nuevoCola;
    }
    
    get getCola(){
        return this.cola;
    }
    
    set setSonidos(nuevoSonidos){
        this.sonidos = nuevoSonidos;
    }
    
    get getSonidos(){
        return this.sonidos;
    }
    
    //Métodos de la clase no getters ni setters//
    getAllProperties(){
        return[this.cola, this.edad, this.tamaño, this.especie, this.nombre, this.cola, this.sonidos]
    }
    
    //Método estático//
    static getAnimal(){
        return "Turttle 🐢🐢";
    }
    
}

const capibara = new Animales(4, 1.3, "roedor", "Panchito", true, "bufido");
capibara.setCola = false;
console.log(capibara.getCola);
console.log(capibara.getNombre);
console.log(capibara.getAllProperties());
//Llamanding el método estático//
console.log(Animales.getAnimal());


export {Animales};