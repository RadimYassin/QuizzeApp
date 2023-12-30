const init = {
    user: null,

}

export default function AuthReducer(state = init, action) {
    switch (action.type) {
        // login and logout 
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state;
    }
}