const { Schema, model } = require('mongoose');

const preferenceSchema = new Schema ({
    team_preference: {
        // Add in reference to drop-down selection given on CreateUser once built
    },
    player_preference: {
        // Add in once API endpoints and routes have been built
    },
    rivalry_preference: {
        // Add in once API endpoints and routes have been built (Use drop down selection through CreateUser)
    },
});

const userPreference = model('userPreference', preferenceSchema);

module.exports = userPreference;