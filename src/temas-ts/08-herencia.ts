class Persona3{
    protected nombre : string;
    protected edad : number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

class Empleado extends Persona3{
    private sueldo : number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    imprimir():void{
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
    pagaimpuestos(){
        if(this.sueldo > 5000){
            console.log(`${this.nombre} debe pagar impuestos`);
        }else{
            console.log(`${this.nombre} no debe pagar impuestos`);
        }
    }
}
const persona = new Persona3('Juan', 45);
persona.imprimir();

const empleado = new Empleado('Carlos', 25, 10000);
empleado.imprimir();
empleado.pagaimpuestos();