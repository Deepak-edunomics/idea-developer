import axios from 'axios'
import setAuthToken from '../helper/setAuthToken'
import jwt_decode from 'jwt-decode'


export const userLoginHelper = (data) => {
    return {
        type: "SET_USERS_DATA",
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

export const userRegister = (userRegisterCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: "http://idea.cxdeployer.com/api/register",
                data: userRegisterCredentials
            })
            const { token} = data
            localStorage.setItem('userJwtToken', token);
            setAuthToken(token)
            dispatch(userLoginHelper(jwt_decode(token)))
        }
        catch (err) {
             console.log("Error in userRegister Action", err.response.data)
        }
       
    }
}


export const userLogin = (userLoginCredentials,history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: "http://idea.cxdeployer.com/api/user/login",
                data: userLoginCredentials
            })
            const { token , user} = data
            localStorage.setItem('userJwtToken', token);
            setAuthToken(token);
            dispatch(userLoginHelper(user))
            if (user.isVerified) {
                dispatch(verifyUserHelper(true))
                history.push('/dashboard')
            }
            else {
                alert("You havent verified your email yet.")
            }
        }
        catch (err) {
            console.log("Error in userLogin Action", err.response.data)
        }

    }
}

export const addWorkspace = (workspacedata) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: "Post",
                url: "http://idea.cxdeployer.com/api/workspace/register",
                data: workspacedata
            })
            console.log("data",data)
        }
        catch (err) {
            console.log("Error in addworkspace Action", err.response.data)
        }

    }
}




export const submitOTP = (otpCredentials, history) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: "http://idea.cxdeployer.com/api/otp/verify",
                data: otpCredentials
            })
            dispatch(verifyUserHelper(true))
            history.push('/dashboard')
        }
        catch (err) {
            dispatch({
                type: "SET_FORGOT_PASSWORD_ERRORS",
                payload: err.response.data
            })
            console.log("Error in submitOTP", err.response.data)
        }
    }
}

export const addEmployee = (employeeCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: "http://idea.cxdeployer.com/api/user/register",
                data: employeeCredentials
            })
            dispatch({
                type: "SET_EMPLOYEE",
                payload: data.user
            })
            console.log("addEmployee",data)
        }
        catch (err) {
            console.log("Error in addEmployee", err.response)
        }
    }
}

export const editEmployee = (employeeCredentials,_id) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: `http://idea.cxdeployer.com/api/user/edit/${_id}`,
                data: employeeCredentials
            })
            if (data.success === "true") {
                dispatch({
                    type: "UPDATE_EMPLOYEE",
                    payload: data.user
                })
            }
        }
        catch (err) {
            console.log("Error in editEmployee", err.response)
        }
    }
}

export const deleteEmployee = (_id) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Delete',
                url: `http://idea.cxdeployer.com/api/user/delete/${_id}`,
            })
            if (data.success === "true") {
                 dispatch({
                     type: "DELETE_EMPLOYEE",
                     payload: _id
                 })
            }
        }
        catch (err) {
            console.log("Error in deleteEmployee", err.response)
        }
    }
}

export const getEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: "http://idea.cxdeployer.com/api/user/all",
            })
            dispatch({
                type: "SET_EMPLOYEES",
                payload: data.user
            })
        }
        catch (err) {
            console.log("Error in  getEmployees", err.response)
        }
    }
}

export const createRole = (roleCredential) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: "http://idea.cxdeployer.com/api/permission/role",
                data: roleCredential
            })
            if (data.success === "true") {
                dispatch({
                    type: "SET_ROLE",
                    payload: data.permission
                })
            }
        }
        catch (err) {
            console.log("Error in createRole", err.response)
        }
    }
}

export const getRoles = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: "http://idea.cxdeployer.com/api/permission/role",
            })
            dispatch(loaderHelper(false))
            if (data.success === "true") {
                dispatch({
                    type: "SET_ROLES",
                    payload: data.permission
                })
            }
        }
        catch (err) {
            console.log("Error in getRoles", err.response)
        }
    }
}

export const createGroup = (groupCredential) => {
    return async (dispatch) => {
        try {
            console.log("groupcredentials",groupCredential)
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: "http://idea.cxdeployer.com/api/group",
                data: groupCredential
            })
            if (data.success === "true") {
                dispatch({
                    type: "SET_GROUP",
                    payload: data
                })
            }
            console.log("da",data)
        }
        catch (err) {
            console.log("Error in createGroup", err.response)
        }
    }
}

export const getGroups = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Get',
                url: "http://idea.cxdeployer.com/api/group",
            })
            if (data.success === "true") {
                dispatch({
                    type: "SET_GROUP",
                    payload: data
                })
            }
            console.log("da", data)
        }
        catch (err) {
            console.log("Error in getGroups", err.response)
        }
    }
}

export const getGroupById = (groupId) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Post',
                url: "http://idea.cxdeployer.com/api/permission/role",
                data: groupId
            })
            console.log("getGroupById", data)
            dispatch({
                type: "SET_GROUP",
                payload: data.user
            })
        }
        catch (err) {
            console.log("Error in getGroupById", err.response)
        }
    }
}























//RESET PASSWORD

export const resetPassword = (userCredentials) => {
    return async (dispatch) => {
        try {
            dispatch(loaderHelper(true))
            const { data } = await axios({
                method: 'Put',
                url: "http://idea.cxdeployer.com/api/password/change",
                data: userCredentials
            })
            dispatch(loaderHelper(false))
        }
        catch (err) {

            console.log("Error in resetPassword", err.response)
        }
    }
}


//USER LOGOUT

export const userLogout = (history) => {
    return (dispatch) => {
        localStorage.removeItem('userJwtToken');
        setAuthToken(false);
        dispatch({
            type: "USER_LOGOUT"
        });
        history.push('/')
    }
}