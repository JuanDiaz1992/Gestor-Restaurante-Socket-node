// const http = require("http");
// const server = http.createServer();
// const { Server: IoServer } = require("socket.io");  // Renombré Socket a IoServer para claridad

// const PORT = 4000;

// // Asegúrate de escuchar en IPv4 (0.0.0.0) para permitir conexiones desde cualquier dirección IPv4.
// const io = new IoServer(server, {
//     cors: { origin: '*' },
//     transports: ['polling', 'websocket']
// });

// io.on('connection', (socket) => {
//     console.log("Conexión establecida");

//     socket.on('change_state', (data) => {
//         io.emit('change_state', data);
//     });
// });

// // Escucha en todas las direcciones IPv4 en el puerto especificado.
// server.listen(PORT, '0.0.0.0', () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });


const http = require('http');

// Crea el servidor
const server = http.createServer((req, res) => {
    // Establece la cabecera de la respuesta con un código 200 (OK)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Envía la respuesta al cliente
    res.end('¡Hola desde el servidor de Node.js!\n');
});

// Escucha en el puerto 3000
server.listen(3000, '0.0.0.0', () => {
    console.log('El servidor está escuchando en http://127.0.0.1:3000/');
});
