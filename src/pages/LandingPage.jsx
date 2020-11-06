import React from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import LandingNav from '../components/LandingNav'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const LandingPAge = () => {
    const history = useHistory()
    const userData = useSelector(store => store.userRoot)
    if (userData.user) {
            history.push('/dashboard')
    }
    

    return (
        <>
            
            
        </>
                
    )
}

export default LandingPAge
