const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type userProfile {
        _id: ID!
        first_name: String!
        last_name: String
        username: String!
        email: String!
        password: String!
    }

    type userPreference {
        _id: ID!
        team_preference: String!
        player_preference: String
        rivalry_preference: String
    }

    type Query {
        userProfile {
            userProfile: [userProfile]
            userPreference: [userPreference]
        }
    }

`;

module.exports = typeDefs