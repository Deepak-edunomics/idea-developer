import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LandingPAge = () => {
    const history = useHistory()
    const userData = useSelector(store => store.userRoot)
    const {isVerified} = userData
     
    if (isVerified) {
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
