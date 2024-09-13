export class areas{
    protected lado:number;
    protected altura:number;
    protected radio:number;
    constructor(lado:number,altura:number,radio:number){
        this.lado=lado;
        this.altura=altura;
        this.radio=radio;
    }
    areaCuadrado(lado:number):number{
        return lado*lado;
    }
    areaRectangulo(lado:number,altura:number):number{
        return lado*altura;
    }
    areacirculo(radio:number):number{
        return Math.PI*Math.pow(radio,2);
    }
}