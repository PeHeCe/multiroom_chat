module.exports.iniciaChat = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'O campo apelido ou nome deve ter entre 3 e 15 caracteres').len(3, 15);
    
    var erros = req.validationErrors();

    if(erros){
        res.render("index.ejs", {validacao : erros})
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido : dadosForm.apelido, mensagem : "acabou de entrar no chat"}
    );

    res.render("chat.ejs", {dadosForm : dadosForm});
} 