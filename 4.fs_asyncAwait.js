const fs = require('node:fs/promises');

//IIFE Inmediatly Invoked Function Expresion
(
    async () =>{
        console.log('Leyendo el primer archivo');
        const text = await fs.readFile('./archivo.txt', 'utf-8');
        console.log('primer texto: ',text);

        console.log('haciendo algo mientras lee los archivos');

        console.log('Leyendo el segundo archivo');
        const secondText = await fs.readFile('./archivo2.txt', 'utf-8');
        console.log('segundo texto: ',secondText);
    }
)()





