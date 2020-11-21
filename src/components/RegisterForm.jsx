import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import classnames from 'classnames'


import Loader from './Loader'
import { userRegister, emailVerification, showSignupModalHelper } from '../redux/actions/userAction'


const RegisterForm = ({showRegisterModal, setShowRegisterModal}) => {
    const userData = useSelector(store => store.userRoot)
    const errorData = useSelector(store => store.errorRoot)

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
    const [registerErrors, setRegisterErrors] = useState({})
    const [emailVerificationErrors, setEmailVerificationErrors] = useState({})
    const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false)
    const [emailForVerification, setEmailForVerification] = useState("")
    

    useEffect(() => {
        if (errorData.registerErrors) {
            setRegisterErrors(errorData.registerErrors)
        }
        if (errorData.emailVerificationErrors) {
            setEmailVerificationErrors(errorData.emailVerificationErrors)
        }
    }, [errorData])


    useEffect(() => {
        if (userData.user) {
           setEmailForVerification(userData.user.email)
            
        }
       
    }, [userData.user])


    


    const formHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return setMismatch(true)
        }
        else {
            setMismatch(false)
            dispatch(userRegister({ firstName, lastName, organization, email, password }))
            setShowEmailVerificationModal(true)

        }
    }


    const otpSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(emailVerification({ email: emailForVerification, otp: OTP }, history))
        setTimeout(() => {
            setShowEmailVerificationModal(false) 
        },400)
        
       
    }
    return (
        <>
            <Modal show={showEmailVerificationModal} onHide={()=>setShowEmailVerificationModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>EMAIL VERIFICATION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={otpSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="emailId">Email</label>
                            <input onChange={(e) => setEmailForVerification(e.target.value)} value={emailForVerification} type="email" className={classnames("form-control",
                                {
                                    'is-invalid': emailVerificationErrors.email

                                })} id="emailId" />
                            {emailVerificationErrors.email && (<div className="invalid-feedback">{emailVerificationErrors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="otpId">OTP</label>
                            <input onChange={(e) => setOTP(e.target.value)} value={OTP} type="text" placeholder="check your email, otp has been sent to your email" className={classnames("form-control",
                                {
                                    'is-invalid': emailVerificationErrors.otp

                                })}  id="otpId" />
                            {emailVerificationErrors.otp && (<div className="invalid-feedback">{emailVerificationErrors.otp}</div>)}
                        </div>
                        {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEmailVerificationModal(false)}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            
            <Modal show={showRegisterModal} onHide={()=>setShowRegisterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>SIGNUP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formHandler}>
                            <div className="form-group">
                                <label htmlFor="firstNameId">First Name</label>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className={classnames("form-control",
                                    {
                                        'is-invalid': registerErrors.firstName

                                    })} id="firstNameId" />
                                {registerErrors.firstName && (<div className="invalid-feedback">{registerErrors.firstName}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastNameId">Last Name</label>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className={classnames("form-control",
                                    {
                                        'is-invalid': registerErrors.lastName

                                    })} id="lastNameId" />
                                {registerErrors.lastName && (<div className="invalid-feedback">{registerErrors.lastName}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="organizationId">Organization Name</label>
                                <input onChange={(e) => setOrganization(e.target.value)} value={organization} type="text" className={classnames("form-control",
                                    {
                                        'is-invalid': registerErrors.organization

                                    })} id="organizationId" />
                                {registerErrors.organization && (<div className="invalid-feedback">{registerErrors.organization}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailId">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={classnames("form-control",
                                    {
                                        'is-invalid': registerErrors.email

                                    })} id="emailId" />
                                {registerErrors.email && (<div className="invalid-feedback">{registerErrors.email}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordId">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className={classnames("form-control",
                                    {
                                        'is-invalid': registerErrors.password

                                    })} id="passwordId" />
                                {registerErrors.password && (<div className="invalid-feedback">{registerErrors.password}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPasswordId">Confirm Password</label>
                                <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" className="form-control" id="confirmPasswordId" />
                            </div>
                            {mismatch ? <div className="alert alert-danger" role="alert">
                                Password Mismatch
                            </div> : null}
                        {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>
                        }
                        
                    </form>
                    <button onClick={() => setShowEmailVerificationModal(true)} type="btn" className="btn btn-info">Havent verified your email yet?</button>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShowRegisterModal(false)}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RegisterForm
