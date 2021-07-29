const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    }
});

// sets up pre-save middleware to create the password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) { 
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compares the incoming password with the stored, hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const userProfile = model('userProfile', profileSchema);

module.exports = userProfile;