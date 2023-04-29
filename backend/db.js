const mongoose  = require("mongoose")

mongoURI = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";


const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected to mongo Successfully");
    } catch (error) {
        console.log("Not connected");
        console.error(error.message)
    }
    
}
module.exports = connectToMongo;

