const express = require("express");
const http = require("http");
const { Server: IoServer } = require("socket.io");
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const PORT = 4000;

var corsOptions = {
    origin: '*'
}

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());

const io = new IoServer(server, {
    cors: { origin: '*' },
    transports: ['polling', 'websocket']
});

io.on('connection', (socket) => {
    console.log("Conexión establecida");

    socket.on('change_state', (data) => {
        io.emit('change_state', data);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

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