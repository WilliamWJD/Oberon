const mongoose=require('mongoose')
require('dotenv').config()

mongoose.Promise=global.Promise

module.exports=mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-onnlg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})