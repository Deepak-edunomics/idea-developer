import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LandingPAge = () => {
    const history = useHistory()
    const userData = useSelector(store => store.userRoot)
     
    console.log("sds",userData)
    if (userData.isVerified) {
           console.log("dfe")
            history.push('/dashboard')
    }
    

    return (
        <>
            <LoginForm />
            <RegisterForm />
        </>
                
    )
}

export default LandingPAge
