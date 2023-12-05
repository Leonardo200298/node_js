//.js -> por defecto utiliza CommonJS
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar CommonJS

import { suma, mult } from '../ESModules/suma.mjs';

console.log(suma(2,4));
console.log(mult(1,4));