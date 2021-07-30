import { gql } from 'apollo/client';

export const CREATE_USER = gql`
    mutation createUserProfile
    ($first_name: String!, $last_name: String, username: String!, email: String!, password: String!)
    { createUserProfile {
        _id
        first_name
        last_name
        username
        email
        password
    }
}
`;

export const CREATE_PREFERENCES = gql`
    mutation createUserPreference
    ($team_preference: String!, $player_preference: String,  $rivalry_preference: String)
    { create userPreference {
        _id
        team_preference
        player_preference
        rivalry_preference
    }}
`;