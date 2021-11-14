const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Please add a course title']
    }
});

module.exports = mongoose.model('Course',courseSchema)
