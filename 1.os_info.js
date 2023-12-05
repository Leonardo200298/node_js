const os = require('node:os');

console.log('informacion del sistema operativo');
console.log('----------------------------');

console.log('Nombre de cordura', os.platform());
console.log('La version del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUS', os.cpus());// <-- vamos a poder escalar procesos en node
console.log('Memoria libre', os.freemem / 1024 / 1024);
console.log('Memoria Total', os.totalmem / 1024 / 1024);
