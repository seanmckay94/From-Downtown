
const randomID = () => Math.floor(Math.random() * 100)
export const reducer = (state, action) => {

    switch (action.type) {
        
        case 'ADD_USER': {
            const newID = randomID();
            const newUser = { ...action.payload, id: newID };

            return {
                ...state,
                userProfiles: [...userProfiles, newUser],
            };
        }

        case 'REMOVE_USER': {
            return {
                ...state,
                userProfiles: [...state.userProfiles].filter((userProfile) => userProfile.id !== action.payload),
            };
        }
        default: {
            return state;
        }
    }
};