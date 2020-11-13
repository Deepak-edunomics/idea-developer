import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Loader from './Loader'
import { userLogin, showLoginModalHelper } from '../redux/actions/userAction'
import { Modal, Button } from 'react-bootstrap'
import classnames from 'classnames'

const LoginForm = (props) => {
    const userData = useSelector(store => store.userRoot)
    const errorData = useSelector(store=>store.errorRoot)
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErrors, setLoginErrors] = useState('')


    const formHandler = (e) => {
        e.preventDefault()
        dispatch(userLogin({ email, password },history))
    }

    useEffect(() => {
        if (errorData.loginErrors) {
            setLoginErrors(errorData.loginErrors)
        }
    }, [errorData])
    return (
        <>
         <Modal show={userData.showLoginModal} onHide={()=>dispatch(showLoginModalHelper(false))}>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body> <form onSubmit={formHandler}>
                    <div className="form-group">
                        <label htmlFor="emailLoginId">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={classnames("form-control",
                            {
                                'is-invalid': loginErrors.email

                            })} id="emailLoginId" />
                        {loginErrors.email && (<div className="invalid-feedback">{loginErrors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLoginId">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} valiue={password} type="password" className={classnames("form-control",
                            {
                                'is-invalid': loginErrors.password

                            })} id="passwordLoginId" />
                        {loginErrors.password && (<div className="invalid-feedback">{loginErrors.password}</div>)}
                    </div>
                    {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}
                    <Link to="/forgotPassword" > Forgot Password ?</Link>
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(showLoginModalHelper(false))}>
                    Close
          </Button>
                </Modal.Footer>
            </Modal>

</>
    )
}

export default LoginForm
