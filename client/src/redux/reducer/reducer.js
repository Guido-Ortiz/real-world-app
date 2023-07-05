import { CREATE_BANK_ACCOUNT, DELETE_BANK_ACCOUNT, EDIT_USER, GET_ACCOUNTS, GET_USERS, LOGIN, RESET_USER } from "../actions/constants"

const name = localStorage.getItem("name");
const lastname = localStorage.getItem("lastname");
const user = localStorage.getItem("user");

const initialState = {
    accounts: [],
    users: [],
    user: {},
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        case CREATE_BANK_ACCOUNT:
            return {
                ...state
            }
        case DELETE_BANK_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(e => e.id !== action.payload)
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                user: { name: action.payload.name, lastname: action.payload.lastname, email: action.payload.user, phone: action.payload.phone }
            }
        case RESET_USER:
            return {
                ...state,
                user: null
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        
        default:
            return state
        //break;
    }
}
export default rootReducer