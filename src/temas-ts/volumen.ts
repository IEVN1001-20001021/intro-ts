import { areas } from "./areas";

class volumenes extends areas{
    private altura:number;
    constructor(lado:number, ancho:number, radio:number, altura:number){
        super(lado, ancho, radio);
        this.altura = altura;
    }
    volumenPrismaRectangular():number{
        return this.areaRectangulo() * this.altura;
    }
    volumenPrismaCuadrado():number{
        return this.areaCuadrado() * this.altura;
    }
    volumenCilindro():number{
        return this.areaCirculo() * this.altura;
    }
    imprimirVolumenes():void{
        console.log(`Volumen Prisma Rectangular: ${Number(this.volumenPrismaRectangular().toFixed(2))}`);
        console.log(`Volumen Prisma Cuadrado: ${Number(this.volumenPrismaCuadrado().toFixed(2))}`);
        console.log(`Volumen Cilindro: ${Number(this.volumenCilindro().toFixed(2))}`);
    }
}

//Areas
const area = new areas(5,8,5);
console.log(`Area Rectangulo: ${Number(area.areaRectangulo().toFixed(2))}`);
console.log(`Area Cuadrado: ${Number(area.areaCuadrado().toFixed(2))}`);
console.log(`Area Circulo: ${Number(area.areaCirculo().toFixed(2))}`);

//Volumenes
const volumen = new volumenes(5, 8, 5, 10);
volumen.imprimirVolumenes();
