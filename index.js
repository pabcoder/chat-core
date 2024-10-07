import { createServer } from "http";
import { Server } from 'socket.io';

const PORT = 4000;
const server = createServer();

const io = new Server(server);

const mensajes = [];

io.on('connection', (socket) => {
  console.log('Alguien se conectó!')
  socket.on('new_msg', (data) => {
    mensajes.unshift(data);

    io.emit('display_msgs', mensajes);
  })
})

server.listen(PORT, () => {
  console.log('Listening on 127.0.0.1:' + PORT);
});