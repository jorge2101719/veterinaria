// Se importan los elementos de node a usar de File System (fs)

import { readFile, writeFile } from 'node:fs/promises';



// Se declaran las funciones leerCitas() y anotarCias(),
// que se usarán en las que se exportarán,
// esto es sólo para no sobrecargar las declaraciones de las exportadas
// Estas utulizan los método writeFile() y readFile()

const leerCitas = async () => {
    try {
        // si citas.json ya exite, leemos citas.json
        return JSON.parse(await readFile('citas.json', 'utf-8'))
    } catch (error) {
        // si no existe citas.json, se crea y se añade un [] (arreglo vacío)
        await writeFile('citas.json', JSON.stringify([]));
        console.log('se ha creado un arreglo vacío')
        return [];
    };
};

const anotarCitas = async (citas) => {
    try {
        // agregamos la información ingresada por consola
        await writeFile('citas.json', JSON.stringify(citas))
    } catch (error) {
        // en caso de algún error u omisión, se muestra un mensaje de error
        console.log(error);
    }
};

// Se declaran las funciones registrar() y leer()
// La primera hace uso de anotarCitas() y la segunda de leerCitas()
// Ambas son exportadas (en nuestro caso, a index.js)

const registrar = async (nombre, edad, tipo, color, enfermedad) => {
    const citas = await leerCitas();
    citas.push({ nombre, edad, tipo, color, enfermedad });
    await anotarCitas(citas);
    console.log('Cita registrada');
};

const leer = async () => {
    const citas = await leerCitas();
    // Comprobamos si el arreglo citas, está o no vacío
    if(citas.length == 0) {
        console.log('No hay citas hasta el momento...', citas);
    } else {
        citas.forEach((cita, index) => {
            console.log(`+++ Cita ${index +1} +++ Nombre: ${cita.nombre} ++ Edad: ${cita.edad} ++ Tipo: ${cita.tipo} ++ Color: ${cita.color} ++ Enfermedad: ${cita.enfermedad} \n`);
        });
    };
};

// Exportamos las dos últimas funciones

export { registrar, leer }