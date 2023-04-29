const express = require("express");
const connectToMongo = require('./db')
const app = express();
connectToMongo();
const port = 5000;
app.use(express.json())

app.use('/api/messauth', require('./routes/messauth'));
app.use('/api/items', require('./routes/items'))
app.use('/api/studauth', require('./routes/studauth'))
app.use('/api/booking', require('./routes/booking'));

app.listen(port, ()=>{
    console.log(`Server successfully connected to ${port}`);
})