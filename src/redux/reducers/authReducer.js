import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/authActions";

const initialState = {
    user: null,
    admin:null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
            case 'FETCH_ADMIN_PROFILE_SUCCESS':
      return {
        ...state,
        admin: action.payload,
      };
        default:
            return state;
    }
};

export default authReducer;
