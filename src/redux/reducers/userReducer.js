const initialState = {
    user: null,
    isVerified: false,
    loader: false,
    workspaces: null, 
    employees: [],
    roles: [],
    groups: []
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload
            }
        case "SET_USERS_DATA":
            return {
                ...state,
                user: action.payload,
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
                groups: [action.payload, ...state.groups],
                loader: false
            }
        default:
          return state
    }
}

export default userReducer