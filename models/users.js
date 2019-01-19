const mongoose = require('mongoose');
const Schema = new Schema({
    userName : {
            type : String,
            unique : true,
            required : true
    },
    eMail : {
            type : String,
            unique : true,
            required : true
    },
    passWord : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('users',userSchema);