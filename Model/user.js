const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    enclosure_id: Number,
    meaurement_name: String,
    values: Number,

})

exports.User = mongoose.model("User", userSchema)