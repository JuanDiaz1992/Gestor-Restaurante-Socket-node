const http = require("http");
const server = http.createServer();
const { Socket } = require("socket.io");

const PORT = 4000
const io = require('socket.io')(server,{
    cors:{ origin: '*'}
})
io.on('connection', (socket) =>{
    console.log("Conexión establecida")
    socket.on('change_state',(data)=>{
        io.emit('change_state',data);
    })
})

server.listen(PORT);