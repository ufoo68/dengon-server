var express = require('express');
var app = express();
var http = require('http').Server(app)
const PORT = 3000

const io = require('socket.io').listen(http);
io.sockets.on('connection', function (socket) {
　socket.on('message',function(msg){
        console.log('message: ' + msg);
        io.emit('message', msg);
    })
})

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
})