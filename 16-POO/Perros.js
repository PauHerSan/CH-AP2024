import { Animales } from "./animals"; 

class Perro extends Animales{
    dueño;
    raza;
    dientesFilosos;
    correa;
    color;
    espolones;
    pelo;
    constructor( nombre, cola, sonidos, edad, dueño, raza, dientesFilosos, correa, color, espolones, pelo){
        //super apunta a las propiedades de la super clase//
        super(nombre, cola, sonidos, edad);
        this.dueño = dueño;
        this.raza = raza;
        this.dientesFilosos = dientesFilosos;
        this.correa = correa;
        this.color = color;
        this.espolones = espolones;
        this.pelo = pelo;

    }
    //getters and setters//
    // Getter and Setter for dueño//
    get dueño() {
        return this.dueño;
    }
    
    set dueño(value) {
        this.dueño = value;
    }
    
    // Getter and Setter for raza
    get raza() {
    return this.raza;
    }

    set raza(value) {
    this.raza = value;
    }

    // Getter and Setter for dientesFiloso
    get dientesFilosos() {
    return this.dientesFilosos;
    }

    set dientesFilosos(value) {
    this.dientesFilosos = value;
    }

    // Getter and Setter for correa
    get correa() {
    return this.correa;
    }

    set correa(value) {
    this.correa = value;
    }

    // Getter and Setter for color
    get color() {
    return this.color;
    }

    set color(value) {
    this.color = value;
    }

    // Getter and Setter for espolones
    get espolones() {
    return this.espolones;
    }

    set espolones(value) {
    this.espolones = value;
    }

    // Getter and Setter for pelo
    get pelo() {
    return this.pelo;
    }

    set pelo(value) {
    this.pelo = value;
    }  

}

//sobreescribir un método
getAllProperties(){
    return `Hola soy ${this.dueño} y mi perro se llama ${this.getNombre}, tiene el pelo ${this.pelo} y de color ${this.color}, es de la raza ${this.raza} 100% fake no real, ${this.espolones? "si": "no"} tiene espolones, ${this.dientesFiloso? "si": "no"} tiene dientes filosos`
}


const nala = new Perro(4, 70, "perro", 10, "nala", true, "ladridos",
    "Martha", "French", false, "pechera", "blanco", false, "chino");
const salsita = new Perro(4, 70, "perro", 10, "salsita", false, "ladridos",
"Jorge", "criolla", false, true, "negro", true, "corto"
);
const chofris = new Perro(4, 35, "perro", 3, "chofris", true, "ladridos",
"Romina", "salchicha", true, true, "cafecito", true, "corto"
);
const tomas = new Perro(4, 115, "perro", 2, "tomas", true, "ladridos",
"Muriel", "black lab", true, "pechera", "negro", true, "corto"
);
const pulgas = new Perro(4, 110, "perro", 7, "pulgas", true, "ladridos",
"Lee", "pastor belga", true, "pechera", "beige", true, "mediano"
);
  console.log(nala.getAllProperties());
  console.log(salsita.getAllProperties());
  console.log(chofris.getAllProperties());
  console.log(tomas.getAllProperties());
  console.log(pulgas.getAllProperties());
