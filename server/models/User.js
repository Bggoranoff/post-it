const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true,
        minlength: [20, 'Bio too short!'],
        maxlength: [200, 'Bio too long!']
    },
    pictureUrl: {
        type: String,
        required: true,
        minlength: [5, 'Profile picture link too short!']
    },
    posters: [{ type: ObjectId, ref: 'Poster' }]
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return; }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);