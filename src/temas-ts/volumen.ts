import { areas } from "./areas";

class volumenPrisma extends areas{
    private volumen:number;
    constructor(lado:number,altura:number,radio:number){
        super(lado,altura,radio);
        this.volumen=0;
    }
    calcularVolumen(){
        this.volumen=this.areaCuadrado(this.lado)*this.altura;
    }
    imprimir(){
        this.calcularVolumen();
        console.log(`Volumen Del Prisma: ${Number(this.volumen).toFixed(2)}`);
    }
}

class volumenPiramide extends areas{
    private volumen:number;
    constructor(lado:number,altura:number,radio:number){
        super(lado,altura,radio);
        this.volumen=0;
    }
    calcularVolumen(){
        this.volumen=(this.areaCuadrado(this.lado)*this.altura)/3;
    }
    imprimir(){
        this.calcularVolumen();
        console.log(`Volumen De La Piramide: ${Number(this.volumen).toFixed(2)}`);
    }
}

class volumenCilindro extends areas{
    private volumen:number;
    constructor(lado:number,altura:number,radio:number){
        super(lado,altura,radio);
        this.volumen=0;
    }
    calcularVolumen(){
        this.volumen=this.areacirculo(this.radio)*this.altura;
    }
    imprimir(){
        this.calcularVolumen();
        console.log(`Volumen Del Cilindro: ${Number(this.volumen).toFixed(2)}`);
    }
}

const prisma = new volumenPrisma(5,10,0);
const piramide = new volumenPiramide(10,15,0);
const cilindro = new volumenCilindro(0,10,5);
prisma.imprimir();
piramide.imprimir();
cilindro.imprimir();

