const http = require('node:http')


const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
    console.log('request receivied', req.url);
    res.end('hola mundo')
})

server.listen(desiredPort, () => {
    console.log(`Escuchando en el puerto http://localhost:${desiredPort}`);
})
