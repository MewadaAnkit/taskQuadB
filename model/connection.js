const mongoose = require('mongoose');

const DB = 'mongodb+srv://ankitmewada1402:alex74@cluster0.is1g01g.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{

    console.log("Successfully connected to Database");

}).catch((err)=>console.log(err));


module.exports = require;