var io = require('socket.io').listen(3000);
io.sockets.on('connection', function (socket) {
　socket.on('message',function(msg){
        console.log('message: ' + msg);
        io.emit('message', msg);
    })
})