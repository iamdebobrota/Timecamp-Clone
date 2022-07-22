
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type:String, required: true},
    status: {type:Boolean, default : false}
})


const UserModel = mongoose.model('projectuser', userSchema);

module.exports = UserModel;