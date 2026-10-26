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
    });

    socket.on('msgParaServidor', function(data){
        
        //dialogo
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );
        
        //participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );
        }
    });
});