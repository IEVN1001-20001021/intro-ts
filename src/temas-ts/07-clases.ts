class Persona {
    nombre: string;
    edad: number;
    constructor(nombre:string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir():void{
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

let persona1 = new Persona('Juan', 45);
console.log(persona1);