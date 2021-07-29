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

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) { 
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
});

const userProfile = ('userProfile', profileSchema);

module.exports = userProfile;