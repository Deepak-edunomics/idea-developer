import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { forgotPassword, postOTP } from '../redux/actions/userAction'
import Loader from '../components/Loader'

const ForgotPassword = () => {
    const userData = useSelector(store => store.userRoot)
    const history = useHistory()
    const { loader, forgotPasswordFlag, postOTPflag} = userData
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [OTP, setOTP] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (forgotPasswordFlag) {
            setToggle(true)
        }
    }, [forgotPasswordFlag])

   

    const emailSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(forgotPassword({email}))
    }

    const otpSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(postOTP({email,otp:OTP, newPassword},history))
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 m-auto">
                    {!toggle ? <form onSubmit={emailSubmitHandler}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" />
                            <small id="emailHelp" class="form-text text-muted">Provide Registered email, You will get an OTP on your Registered Email.</small>
                        </div>
                        {forgotPasswordFlag ? <div class="alert alert-success" role="alert">
                            Opt has been send to you email.. 
</div> : null
                        }

                        {loader ? <Loader /> : <button type="submit" class="btn btn-primary">Send OTP</button> }
                    </form> :
                        <form onSubmit={otpSubmitHandler}>
                            <div class="form-group">
                                <label for="exampleInputOTP">OTP</label>
                                <input value={OTP} onChange={(e) => setOTP(e.target.value)} type="text" class="form-control" id="exampleInputOTP" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputNewPassword">New Password</label>
                                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="text" class="form-control" id="exampleInputNewPassword" />
                            </div>
                            {loader ? <Loader /> : <button type="submit" class="btn btn-primary">Submit</button>}
                        </form>
                    }
                </div>

            </div>

        </div>
    )
}

export default ForgotPassword


