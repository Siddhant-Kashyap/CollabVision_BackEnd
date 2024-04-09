const mongoose = require('mongoose')
const uri = 'mongodb+srv://sid:sidkk@taskapp.3ifefug.mongodb.net/?retryWrites=true&w=majority&appName=TaskApp'
const localURI = 'mongodb://localhost:27017/task'

async function connectDB(){
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

    } catch (error) {

        console.error('Error connecting to MongoDB:', error);
        
    }
}

module.exports = connectDB