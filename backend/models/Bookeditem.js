const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
    studuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studuser'
    },
    itemname:{
        type:String,
        required:true
    },
    itemprice:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('bookeditem', BookSchema);