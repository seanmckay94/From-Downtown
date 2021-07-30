import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query userProfile {
        userProfile {
            _id
            username
        }
    }
`;

export const QUERY_PREFERENCES = gql`
    query userPreferenc {
        userPreference {
            _id
            team_preference
            player_preference
            rivalry_preference
        }
    }
`;