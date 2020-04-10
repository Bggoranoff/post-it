const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const posterSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, 'The title should be at least 5 chars long!'],
        maxlength: [20, 'Too long of a title!']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Too short of a description!'],
        maxlength: [200, 'Too long of a description!']
    },
    imageUrl: {
        type: String,
        required: true,
        minlength: [5, 'Invalid link format!']
    },
    price: {
        type: Number,
        required: true,
        min: [20, 'Invalid price!'],
        max: [100, 'Invalid price!']
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'User'
    }
});

module.exports = new Model('Poster', posterSchema);