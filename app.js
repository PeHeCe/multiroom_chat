var app = require('./config/server');

var server = app.listen(3000, function () {
    console.log('SERVIDOR ONLINE')
})

var io = require('socket.io').listen(server);

app.set('io', io);

//criar a conexão por webSocket
io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    })
}) 