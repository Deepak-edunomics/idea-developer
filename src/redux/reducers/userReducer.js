const initialState = {
    showLoginModal: false,
    showSignupModal: false,
    user: null,
    isVerified: false,
    loader: false,
    workspaces: null, 
    employees: [],
    roles: [],
    groups: [],
    workflows: [],
    stages: [],
    ideas: [],
    challenges: []
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SIGNUP_MODAL":
            return {
                ...state,
                showSignupModal: action.payload
            }
        case "SET_LOGIN_MODAL":
            return {
                ...state,
                showLoginModal: action.payload
            }
        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload
            }
        case "SET_USERS_DATA":
            return {
                ...state,
                user: action.payload,
                isVerified : action.payload.isVerified,
                loader: false
            }
        case "VERIFY_USER":
            return {
                ...state,
                isVerified: action.payload,
                loader: false
            }
        case "DELETE_USERS_DATA":
            return {
                ...state,
                user: action.payload,
                isVerified: false,
                loader: false
            }
        case "SET_WORKSPACE":
            return {
                ...state,
                workspaces: [action.payload, ...state.workspaces],
                loader: false
            }
        case "SET_WORKSPACES":
            return {
                ...state,
                workspaces: action.payload,
                loader: false
            }
        case "DELETE_WORKSPACE":
            return {
                ...state,
                workspaces: state.workspaces.filter(obj => {
                    return obj._id !== action.payload
                }),
                loader: false
            } 
        case "UPDATE_WORKSPACE":
            return {
                ...state,
                workspaces: state.workspaces.map(workspace => workspace._id === action.payload._id ? action.payload : workspace),
                loader: false
            }
        case "SET_EMPLOYEE":
            return {
                ...state,
                employees: [action.payload, ...state.employees],
                loader: false
            }
        case "USER_LOGOUT":
            return {
                ...state,
                user: null,
                loader: false
            }
        case "SET_EMPLOYEES":
            return {
                ...state,
                employees: action.payload,
                loader: false
            }
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(obj => {
                    return obj._id !== action.payload
                }),
                loader: false
            }
        case "UPDATE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.map(employee => employee._id === action.payload._id ? action.payload : employee),
                loader: false
            }
        case "SET_ROLE":
            return {
                ...state,
                roles: [...state.roles, action.payload],
                loader: false
            }
        case "SET_ROLES":
            return {
                ...state,
                roles: action.payload,
                loader: false
            }
        case "SET_GROUP":
            return {
                ...state,
                groups: [...state.groups, action.payload],
                loader: false
            }
        case "SET_GROUPS":
            return {
                ...state,
                groups: action.payload,
                loader: false
            }
        case "SET_WORKFLOW":
            return {
                ...state,
                workflows: [...state.workflows, action.payload],
                loader: false
            }
        case "SET_WORKFLOWS":
            return {
                ...state,
                workflows: action.payload,
                loader: false
            }
        case "ADD_STAGE":
            return {
                ...state,
                stages: [...state.stages, action.payload]
            }
        case "SET_IDEA":
            return {
                ...state,
                ideas: [...state.ideas, action.payload],
                loader: false
            }
        case "SET_IDEAS":
            return {
                ...state,
                ideas: action.payload,
                loader: false
            }
        case "UPDATE_IDEA":
            return {
                ...state,
                ideas: state.ideas.map(idea => idea._id === action.payload._id ? action.payload : idea),
                loader: false
            }
        case "DELETE_IDEA":
            return {
                ...state,
                ideas: state.ideas.filter(obj => {
                    return obj._id !== action.payload
                }),
                loader: false
            }
        case "SET_CHALLENGE":
            return {
                ...state,
                challenges: [...state.challenges, action.payload],
                loader: false
            }
        case "SET_CHALLENGES":
            return {
                ...state,
                challenges: action.payload,
                loader: false
            }
        case "UPDATE_CHALLENGE":
            return {
                ...state,
                challenges: state.challenges.map(challenge => challenge._id === action.payload._id ? action.payload : challenge),
                loader: false
            }
        case "DELETE_CHALLENGE":
            return {
                ...state,
                challenges: state.challenges.filter(obj => {
                    return obj._id !== action.payload
                }),
                loader: false
            }
        default:
          return state
    }
}

export default userReducer