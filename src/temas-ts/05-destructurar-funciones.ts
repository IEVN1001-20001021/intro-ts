export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Telefono N',
    precio:1000
}

const tablet:Producto={
    desc:'Tablet N',
    precio:500
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;

}

const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1)
console.log(iva1);

export function calcularIVA2(productos:Producto[]):[number,number]{ //Se puede regresar un arreglo
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return [total,total*0.16];
}
const articulos2=[telefono,tablet];
const [total,iva]=calcularIVA2(articulos2);
console.log(total);
console.log(iva);
