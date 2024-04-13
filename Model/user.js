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
    event_date: Date
}, {
    key: String,
    value: Number,
    uom: String,
    event_date: Date
})
const userSchema = mongoose.Schema({
    enclosure_id: Number,
    values: [valuesSchema]

})

exports.User = mongoose.model("User", userSchema)