const { userProfile, userPreference } = require('../models');

const resolvers = {
    Query: {
        userProfile: async () => {
            return userProfile.find({});
        },

        userPreference: async (parent, { _id }) => {
            const params = _id ? { _id } : { };
            return userPreference.find(params);
        },
    },
}

module.exports = resolvers;