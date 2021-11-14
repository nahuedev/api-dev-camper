const mongoose = require('mongoose');
const colors = require('colors');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        }, (err) => {
            if (!err) {
                console.log(colors.blue('MongoDB Connection Succeeded.'))
            } else {
                console.log(colors.red('Error in DB connection: ' + err))
            }
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
