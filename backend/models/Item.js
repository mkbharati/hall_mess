const mongoose = require("mongoose");

const {Schema} = mongoose;

const ItemsSchema = new Schema({
    // studuser:{ // here user signify user id
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'studuser'
    // },
    itemname:{
        type:String,
        required: true,
        unique:true
    },
    itemprice:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('item', ItemsSchema);