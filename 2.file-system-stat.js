const fs = require('node:fs') // a partir de node 16 se recomiendo poner node:

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es archivo
  stats.isDirectory(), // si es directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamanio en bytes
)
