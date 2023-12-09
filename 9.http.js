const http = require('node:http')
const {findAvailablePort} = require('./10.free-port')

const desiredPort =process.env.PORT ?? 3000;

const server = http.createServer((req,res)=>{
    console.log('request recibido');
    res.end('hola mundo')
})
findAvailablePort(desiredPort).then(port=>{
    server.listen(port,()=>{
        console.log(`Escuchando en el puerto http://localhost:${port}`);
    })

})