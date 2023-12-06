const path = require('node:path');

//barra separadora de carpetas segun sistema operativo
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//para obtener el nombre de un fichero/archivo
const base = path.basename('/tmp/leo-secret-files/passwords.txt');
console.log(base);

//nombre del archivo sacandole la extension
const fileName = path.basename('/tmp/leo-secret-files/passwords.txt', '.txt');
console.log(fileName);

//muestra la extension del archivo
const extension = path.extname('ejemplo.java');
console.log(extension);