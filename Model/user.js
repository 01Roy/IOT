const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     enclosure_id: Number,
//     meaurement_name: String,
//     values: Number,

// })
const valuesSchema = mongoose.Schema({
    key: String,
    value: Number,
    uom: String,
    event_date: {
        type: Date,
        default: Date.now
    }
}, {
    key: String,
    value: Number,
    uom: String,
    event_date: {
        type: Date,
        default: Date.now
    }
})
const userSchema = mongoose.Schema({
    enclosure_id: Number,
    values: [valuesSchema]

})

exports.User = mongoose.model("User", userSchema)