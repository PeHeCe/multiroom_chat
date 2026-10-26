module.exports = function(application){
    application.post('/chat', function(req, res){
        application.app.controlers.chat.iniciaChat();
    });
    
    application.get('/chat', function(req, res){
        res.render('chat.ejs');
    });
}