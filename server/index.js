const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors:{origin:"*"}
})


io.on("connection", (socket) => {
    socket.on('chat message',(msg)=>{
        console.log(msg);
        io.emit("chat message",msg);
    })
});

server.listen(3000,()=>{
    console.log("server started...");
});