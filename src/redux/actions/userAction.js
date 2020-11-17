import axios from 'axios'
import setAuthToken from '../helper/setAuthToken'


export const userLoginHelper = (data) => {
    return {
        type: "SET_USERS_DATA",
        payload: data
    }
}

export const showSignupModalHelper = (data) => {
    return {
        type: "SET_SIGNUP_MODAL",
        payload: data
    }
}

export const showLoginModalHelper = (data) => {
    return {
        type: "SET_LOGIN_MODAL",
        payload: data
    }
}

export const addStageHelper = (data) => {
    return {
        type: "ADD_STAGE",
        payload: data
    }
}

const loaderHelper = (data) => {
    return {
        type: "SET_LOADER",
        payload: data
    }
}

const verifyUserHelper = (data) => {
    return {
        type: "VERIFY_USER",
        payload: data
    }
}

// const urlHelper = "http://idea.cxdeployer.com/api"

// const urlHelper = 'http://localhost:3001/api'

const urlHelper = "https://idea-deployer.herokuapp.com/api"

// USER
export const userRegister = (userRegisterCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/user/register`,
                data: userRegisterCredentials
            })
            if (data.success) {
                const { token, result } = data
                localStorage.setItem('ideaDeveloperUserToken', token)
                setAuthToken(token)
                dispatch(userLoginHelper(result))
            }
        }
        catch (err) {
            console.log("Error in userRegister Action", err.response.data)
            dispatch(loaderHelper(false))
            dispatch({
                type: "SET_USER_REGISTER_ERRORS",
                payload: err.response.data
            })

        }
       
    }
}


export const userLogin = (userLoginCredentials,history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/user/login`,
                data: userLoginCredentials
            })
            if (data.success) {
                const { token, result } = data
                localStorage.setItem('ideaDeveloperUserToken', token)
                setAuthToken(token)
                dispatch(userLoginHelper(result))
                history.push('/dashboard')
            }
        }
        catch (err) {
            console.log("Error in userLogin Action", err.response.data)
            dispatch(loaderHelper(false))
            dispatch({
                type: "SET_USER_LOGIN_ERRORS",
                payload: err.response.data
            })
        }

    }
}

export const emailVerification = (otpCredentials, history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/emailVerification`,
                data: otpCredentials
            })
            if (data.success) {
                const { token, result } = data
                localStorage.setItem('ideaDeveloperUserToken', token)
                setAuthToken(token)
                dispatch(userLoginHelper(result))
                dispatch(verifyUserHelper(true))
                history.push('/dashboard')
            }

        }
        catch (err) {
            console.log("Error in emailVerification", err.response.data)
            dispatch(loaderHelper(false))
            dispatch({
                type: "SET_EMAIL_VERIFICATION_ERRORS",
                payload: err.response.data
            })
        }
    }
}



// WORKSPACE

export const addWorkspace = (workspacedata) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/workspace/register`,
                data: workspacedata
            })
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addworkspace Action", err.response.data)
        }

    }
}



// EMPLOYEE
export const addEmployee = (employeeCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/employee`,
                data: employeeCredentials
            })
            if (data.success) {
                dispatch({
                    type: "SET_EMPLOYEE",
                    payload: data.result
                })
            }
            console.log("addEmployee",data.result)
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addEmployee", err.response.data)
        }
    }
}

export const editEmployee = (employeeCredentials,_id) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/user/employee/${_id}`,
                data: employeeCredentials
            })
            if (data.success) {
                dispatch({
                    type: "UPDATE_EMPLOYEE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in editEmployee", err.response.data)
        }
    }
}

export const deleteEmployee = (_id) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `${urlHelper}/user/employee/${_id}`,
            })
            if (data.success) {
                 dispatch({
                     type: "DELETE_EMPLOYEE",
                     payload: _id
                 })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteEmployee", err.response.data)
        }
    }
}

export const getEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/employee`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_EMPLOYEES",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in  getEmployees", err.response.data)
        }
    }
}

// ROLE

export const createRole = (roleCredential) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/permission`,
                data: roleCredential
            })
            if (data.success) {
                dispatch({
                    type: "SET_ROLE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in createRole", err.response.data)
        }
    }
}

export const getRoles = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/permission`,
            })
            dispatch(loaderHelper(false))
            if (data.success) {
                dispatch({
                    type: "SET_ROLES",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getRoles", err.response.data)
        }
    }
}


// GROUP
export const createGroup = (groupCredential) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/group`,
                data: groupCredential
            })
            if (data.success) {
                dispatch({
                    type: "SET_GROUP",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in createGroup", err.response.data)
        }
    }
}

export const getGroups = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/group`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_GROUPS",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getGroups", err.response.data)
        }
    }
}

export const getGroupById = (groupId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/permission/role`,
                data: groupId
            })
            console.log("getGroupById", data)
            dispatch({
                type: "SET_GROUP",
                payload: data.user
            })
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getGroupById", err.response.data)
        }
    }
}


// IDEA ACTIONS
export const getIdeas = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/idea`
            })
            if (data.success) {
                dispatch({
                    type: "SET_IDEAS",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getIdeas", err.response.data)
        }
    }
}

export const getIdeaById = (ideaId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/idea/${ideaId}`
            })
            if (data.success) {
                dispatch({
                    type: "SET_IDEA",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getIdeaById", err.response.data)
        }
    }
}


export const addIdea = (ideaCredential) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/idea`,
                data: ideaCredential
            })
            if (data.success) {
                dispatch({
                    type: "SET_IDEA",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addIdea", err.response.data)
        }
    }
}

export const updateIdea = (ideaCredential, ideaId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/user/idea/${ideaId}`,
                data: ideaCredential
            })
            if (data.success) {
                dispatch({
                    type: "UPDATE_IDEA",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in updateIdea", err.response.data)
        }
    }
}

export const deleteIdea = (ideaId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `${urlHelper}/user/idea/${ideaId}`,
            })
            if (data.success) {
                dispatch({
                    type: "DELETE_IDEA",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteIdea", err.response.data)
        }
    }
}


// CHALLENGE ACTIONS
export const getChallenges = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/challenge`
            })
            if (data.success) {
                dispatch({
                    type: "SET_CHALLENGES",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getChallenges", err.response.data)
        }
    }
}

export const getChallengeById = (challengeId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/challenge/${challengeId}`
            })
            if (data.success) {
                dispatch({
                    type: "SET_CHALLENGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getChallengeById", err.response.data)
        }
    }
}


export const addChallenge = (challengeCredential) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/challenge`,
                data: challengeCredential
            })
            if (data.success) {
                dispatch({
                    type: "SET_CHALLENGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addChallenge", err.response.data)
        }
    }
}

export const updateChallenge = (challengeCredential, challengeId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/user/challenge/${challengeId}`,
                data: challengeCredential
            })
            if (data.success) {
                dispatch({
                    type: "UPDATE_CHALLENGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in updateChallenge", err.response.data)
        }
    }
}

export const deleteChallenge = (challengeId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `${urlHelper}/user/challenge/${challengeId}`,
            })
            if (data.success) {
                dispatch({
                    type: "DELETE_CHALLENGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteChallenge", err.response.data)
        }
    }
}


export const createWorkflow = (data) => {
    return {
        type: "SET_WORKFLOW",
        payload: data
    }
}



//RESET PASSWORD
export const resetPassword = (userCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/password/change`,
                data: userCredentials
            })
            dispatch(loaderHelper(false))
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in resetPassword", err.response)
        }
    }
}


//USER LOGOUT
export const userLogout = (history) => {
    return (dispatch) => {
        localStorage.removeItem('ideaDeveloperUserToken');
        setAuthToken(false);
        dispatch({
            type: "USER_LOGOUT"
        });
        history.push('/')
    }
}


export const tokenExpireHelper = () => {
    return (dispatch) => {
        localStorage.removeItem('ideaDeveloperUserToken');
        setAuthToken(false);
        dispatch({
            type: "USER_LOGOUT"
        });
    }
}