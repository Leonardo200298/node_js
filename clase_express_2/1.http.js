const fs = require('node:fs');
const http = require('node:http')


const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Bienvenido a mi página de inicio</h1>')
    }else if (req.url === '/prueba'){
        res.statusCode = 200;
        res.end('<h3>Estas en la seccion prueba</h3>')
    }else if (req.url === '/imagen'){
        fs.readFile('./images/imagen.png', (err,data)=>{
            if (err) {
                res.statusCode = 500;
                res.end('<h4>Internal Server Error')
            }else{
                res.setHeader('Content-Type', 'image/png');
                res.end(data)
            }
        })
    }else{
        res.statusCode = 404;
        res.end('Ruta no encontrada')
    }
}


const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Escuchando en el puerto http://localhost:${desiredPort}`);
})
