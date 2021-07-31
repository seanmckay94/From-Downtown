const { Schema, model } = require('mongoose');

const playersSchema = new Schema ({
    players: {
        type: String,
    }
})

const preferenceSchema = new Schema ({
    team_preference: {
        type: String,
        required: true,
        trim: true,
    },
    player_preference: {
        players: [playersSchema],
        type: String,
        trim: true,
    },
    rivalry_preference: {
        type: String,
        trim: true,
    },
});

const userPreference = model('userPreference', preferenceSchema);

module.exports = userPreference;