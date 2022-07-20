const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    email: {type: Email , required:true},
    password : {type: String, required:true},
    phone:{type: Number, required:false}
})

const ClientModel = mongoose.model("client", clientSchema)

module.exports = ClientModel ;