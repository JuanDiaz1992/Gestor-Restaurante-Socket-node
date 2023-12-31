const http = require("http");
const server = http.createServer();
const { Server: IoServer } = require("socket.io");  // Renombré Socket a IoServer para claridad

const PORT = 80;

// Asegúrate de escuchar en IPv4 (0.0.0.0) para permitir conexiones desde cualquier dirección IPv4.
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

// Escucha en todas las direcciones IPv4 en el puerto especificado.
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});