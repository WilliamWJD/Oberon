const mongoose=require('mongoose')
require('dotenv').config()

mongoose.Promise=global.Promise

module.exports=mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-onnlg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

mongoose.Error.messages.general.required="O atributo '{PATH}' é obrigatório"