const initialState = {
    registerErrors: null,
    loginErrors: null,
    emailVerificationErrors: null,
    forgotPasswordErrors: null,
    updatePasswordErrors: null
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_REGISTER_ERRORS":
            return {
                ...state,
                registerErrors: action.payload
            }
        case "SET_USER_LOGIN_ERRORS":
            return {
                ...state,
                loginErrors: action.payload
            }
        case "SET_EMAIL_VERIFICATION_ERRORS":
            return {
                ...state,
                emailVerificationErrors: action.payload
            }
        case "SET_FORGOT_PASSWORD_ERRORS":
            return {
                ...state,
                forgotPasswordErrors: action.payload
            }
        case "SET_UPDATE_PASSWORD_ERROR":
            return {
                ...state,
                updatePasswordErrors: action.payload
            }
        default:
            return state;
    }
}


export default errorReducer