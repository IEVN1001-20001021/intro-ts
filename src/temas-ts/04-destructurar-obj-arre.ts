interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    //Interface anidada
    detalles: Detalles;
}
interface Detalles{
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'La vida es un sueño',
    detalles: {
        autor: 'Fernando de Rojas',
        year: 1500
    }
}

/*console.log('El volumen actual es de: ', reproductor.volumen);
console.log('El segundo actual es de: ', reproductor.segundo);
console.log('El cantante es: ', reproductor.detalles.autor);    
console.log('El año es: ', reproductor.detalles.year);*/

// Destructuración de objetos

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, year} = detalles;

console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual es de: ',segundo);
console.log('El cantante es: ', autor);    
console.log('El año es: ', year);

const dbz: string[] = ['Goku', 'Majinbu', 'Babidy', 'Frezer'];
/*console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);*/

const [p1, , p3, p4] = dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);
