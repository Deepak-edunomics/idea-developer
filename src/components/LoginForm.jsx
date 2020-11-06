import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Loader from './Loader'
import {userLogin} from '../redux/actions/userAction'

const LoginForm = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(userLogin({ email, password },history))
    }
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModal">LOGIN</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formHandler}>
                            <div className="form-group">
                                <label htmlFor="emailLoginId">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="emailLoginId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordLoginId">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} valiue={password} type="password" className="form-control" id="passwordLoginId" />
                            </div>
                            {/* {user.success && <div className="alert alert-success" role="alert">
                                LoggedIn Successfully
                            </div>} */}
                            {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}
                            <Link to="/forgotPassword" > Forgot Password ?</Link>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LoginForm
