import axios from 'axios'
import setAuthToken from '../helper/setAuthToken'


export const userLoginHelper = (data) => {
    return {
        type: "SET_USERS_DATA",
        payload: data
    }
}


export const addStageHelper = (data) => {
    return {
        type: "ADD_STAGE",
        payload: data
    }
}

export const setCurrentWorkspace = (data) => {
    return {
        type: "SET_CURRENT_WORKSPACE",
        payload: data
    }
}

const loaderHelper = (data) => {
    return {
        type: "SET_LOADER",
        payload: data
    }
}




// const urlHelper = "http://idea.cxdeployer.com/api"

// const urlHelper = 'http://127.0.0.1:3001/api'

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


export const setLoginFlagHelper = (data) => {
    return {
        type: "SET_LOGIN_FLAG",
        payload: data
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
                dispatch(setLoginFlagHelper(true))
                setTimeout(() => {
                    dispatch(setLoginFlagHelper(false))
                },2000)
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

const verifyUserHelper = (data) => {
    return {
        type: "VERIFY_USER",
        payload: data
    }
}


const setUserVerifiedFlagHelper = (data) => {
    return {
        type: "SET_USER_VERIFIED_FLAG",
        payload: data
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
                dispatch(setUserVerifiedFlagHelper(true))
                setTimeout(() => {
                    dispatch(setUserVerifiedFlagHelper(false))
                },2000)
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

export const setupdatePasswordHelper = (data) => {
    return {
        type: "SET_UPDATE_PASSWORD_FLAG",
        payload: data
    }
}


//UPDATE PASSWORD
export const updatePassword = (passwordData) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/updatePassword`,
                data: passwordData
            })
            if (data.success) {
                dispatch(setupdatePasswordHelper(true))
                setTimeout(() => {
                    dispatch(setupdatePasswordHelper(false))
                },2000)
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in resetPassword", err.response.data)
        }
    }
}

export const setForgotPasswordHelper = (data) => {
    return {
        type: "SET_FORGOT_PASSWORD_FLAG",
        payload: data
    }
}

//FORGOT PASSWORD
export const forgotPassword = (email) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/forgotPassword`,
                data: email
            })
            if (data.success) {
                dispatch(setForgotPasswordHelper(true))
                setTimeout(() => {
                    dispatch(setForgotPasswordHelper(false))
                },2000)
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in forgotPasword", err.response.data)

        }
    }
}

//POST OTP FOR FORGOT PASSWORD
export const postOTP = (otpCredentials,history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/postOTP`,
                data: otpCredentials
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
            dispatch(loaderHelper(false))
            console.log("Error in postOTP", err.response.data)

        }
    }
}

export const userLogoutFlagHelper = (data) => {
    return {
        type: "SET_LOGOUT_FLAG",
        payload: data
    }
}
export const userLogout = (history) => {
    return (dispatch) => {
        localStorage.removeItem('ideaDeveloperUserToken');
        setAuthToken(false);
        dispatch({
            type: "USER_LOGOUT"
        });
        dispatch(userLogoutFlagHelper(true))
        setTimeout(() => {
          dispatch(userLogoutFlagHelper(false))  
        },2000)
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





// WORKSPACE
export const addWorkspace = (workspacedata,history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: `${urlHelper}/user/workspace`,
                data: workspacedata
            })
            if (data.success) {
                dispatch({
                    type: "SET_WORKSPACE",
                    payload: data.result
                })
                dispatch(setCurrentWorkspace(data.result))
                history.push('/addChallenge')
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addworkspace Action", err.response.data)
        }
    }
}


export const getWorkspace = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Get",
                url: `${urlHelper}/user/workspace`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_WORKSPACES",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getWorkspace Action", err.response)
        }
    }
}


export const updateWorkspace = (workspaceData,workspaceId,history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Put",
                url: `${urlHelper}/user/workspace/${workspaceId}`,
                data: workspaceData
            })
            console.log("updateWorkspace",data)
            if (data.success) {
                dispatch({
                    type: "UPDATE_WORKSPACE",
                    payload: data.result
                })
                history.push('/workflow')
                
            
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in updateWorkspace Action", err.response)
        }

    }
}

export const deleteWorkspace = (workspaceId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Delete",
                url: `${urlHelper}/user/workspace/${workspaceId}`,
            })
            if (data.success) {
                dispatch({
                    type: "DELETE_WORKSPACE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteWorkspace Action", err.response)
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


//WORKFLOW
export const addWorkflow = (workflowData) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/workflow`,
                data: workflowData
            })
            if (data.success) {
                dispatch({
                    type: "SET_WORKFLOW",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addWorkflow", err.response.data)
        }
    }
}

export const getWorkflow = (workspaceId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/workflow/${workspaceId}`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_WORKFLOWS",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getWorkflow", err.response.data)
        }
    }
}

export const updateWorkflow = (workflowData,workflowId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/user/workflow/${workflowId}`,
                data:workflowData
            })
            if (data.success) {
                dispatch({
                    type: "UPDATE_WORKFLOW",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in updateWorkflow", err.response.data)
        }
    }
}

export const deleteWorkflow = (workflowId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `${urlHelper}/user/workflow/${workflowId}`,
            })
            if (data.success) {
                dispatch({
                    type: "DELTE_WORKFLOW",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteWorkflow", err.response.data)
        }
    }
}

export const getWorkflowById = (workflowId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/workflow/${workflowId}`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_WORKFLOW",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteWorkflow", err.response.data)
        }
    }
}

// STAGE
export const addStage = (stageData) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: `${urlHelper}/user/stage`,
                data: stageData
            })
            if (data.success) {
                dispatch({
                    type: "SET_STAGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in addStage", err.response.data)
        }
    }
}

export const getStage = (workflowId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/stage/${workflowId}`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_STAGES",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getStage", err.response.data)
        }
    }
}

export const updateStage = (stageData, stageId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `${urlHelper}/user/stage/${stageId}`,
                data: stageData
            })
            if (data.success) {
                dispatch({
                    type: "UPDATE_STAGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in updateStage", err.response.data)
        }
    }
}

export const deleteStage = (stageId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `${urlHelper}/user/stage/${stageId}`,
            })
            if (data.success) {
                dispatch({
                    type: "DELETE_STAGE",
                    payload: data.result
                })
                alert(`${data.result.stageName} deleted successfully`)
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in deleteStage", err.response.data)
        }
    }
}

export const getStageById = (stageId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: `${urlHelper}/user/workflow/${stageId}`,
            })
            if (data.success) {
                dispatch({
                    type: "SET_STAGE",
                    payload: data.result
                })
            }
        }
        catch (err) {
            dispatch(loaderHelper(false))
            console.log("Error in getStageById", err.response.data)
        }
    }
}




