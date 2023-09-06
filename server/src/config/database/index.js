const mongoose = require('mongoose')
module.exports = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/chat-app');
        console.log("Connect successfully")
    } catch (error) {
        console.log('error')
    }
}