import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory} from 'react-router-dom'
import Loader from './Loader'
import {userRegister,submitOTP} from '../redux/actions/userAction'

const RegisterForm = () => {
    const userData = useSelector(store=>store.userRoot)
    const dispatch = useDispatch()
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [organization, setOrganization] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mismatch, setMismatch] = useState(false)
    const [OTP, setOTP] = useState('')


    const formHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
           return setMismatch(true)
        }
        else {
            setMismatch(false)
            dispatch(userRegister({ firstName, lastName, organization, email, password }))
        }
    }


    const otpSubmitHandler = (e) => {
        e.preventDefault()
        console.log("user", userData.user.userId,OTP)
        dispatch(submitOTP({userId:userData.user.userId, otp: OTP},history))
    }
    return (
    
            <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpModal">SIGNUP</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    <div className="modal-body">
                        {userData.user ? <form onSubmit={otpSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="otpId">Provide OTP</label>
                                <input onChange={(e) => setOTP(e.target.value)} value={OTP} type="text" placeholder="check your email, otp has been sent to your email" className="form-control" id="otpId" />
                            </div>
                            {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}

                        </form> : <form onSubmit={formHandler}>
                                <div className="form-group">
                                    <label htmlFor="firstNameId">First Name</label>
                                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="firstNameId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastNameId">Last Name</label>
                                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="lastNameId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="organizationId">Organization Name</label>
                                    <input onChange={(e) => setOrganization(e.target.value)} value={organization} type="text" className="form-control" id="organizationId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailId">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="emailId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="passwordId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPasswordId">Confirm Password</label>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" className="form-control" id="confirmPasswordId" />
                                </div>
                                {mismatch ? <div className="alert alert-danger" role="alert">
                                    Password Mismatch
                            </div> : null}
                                {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}
                            </form>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            

       
        
        
    )
}

export default RegisterForm
