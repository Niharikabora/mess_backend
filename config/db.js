const mongoose = require('mongoose');
const config = require('config')

// const db = config.get('mongoURI');
const db = "mongodb+srv://niharika:qwerty420@cluster0.brfruyl.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async() =>{
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected...');    
    } catch (error) {
       console.log(error.message);
       process.exit(1); 
    }
}

module.exports = connectDB;