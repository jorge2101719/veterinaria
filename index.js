// Inicialmente hice un único archivo. Una vez que observé que funcionaba
// lo dividí en modularicé.

// se importan las funciones que usará main() desde operaciones.js

import { registrar, leer } from './operaciones.js';

const argumentos = process.argv.slice(2);
const [option, nombre, edad, tipo, color, enfermedad] = argumentos;


const main = async() => {
    switch(option) {
        case 'registrar':
            await registrar(nombre, edad, tipo, color, enfermedad);
            break;
        case 'leer':
            await leer();
            break;
        default: console.log(`La opción ${option} no es correcta. Inténtelo otra vez.`)
    }
};

main();


