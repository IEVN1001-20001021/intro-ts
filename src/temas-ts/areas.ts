export class areas{
    protected lado:number;
    protected ancho:number;
    protected radio:number;
    constructor(lado:number,ancho:number,radio:number){
        this.lado=lado;
        this.ancho=ancho;
        this.radio=radio;
    }
    areaRectangulo():number{
        return this.lado * this.ancho;
    }
    areaCuadrado():number{
        return this.lado * this.lado;
    }
    areaCirculo():number{
        return Math.PI * Math.pow(this.radio,2);
    }
}