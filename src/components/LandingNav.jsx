import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showLoginModalHelper, showSignupModalHelper } from '../redux/actions/userAction'
import LogoutModal from './LogoutModal'
import UpdatePasswordModal from './ResetPassword'
import LoginModal from './LoginForm'
import RegisterModal from './RegisterForm'


const LandingNav = (props) => {
    const userData = useSelector(store => store.userRoot)
    const {user, isVerified, loginFlag} = userData
    const dispatch = useDispatch()
    const [logoutModal, setLogoutModal] = useState(false)
    const [updatePasswordModal, setUpdatePasswordModal] = useState(false)
    const [showloginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    useEffect(() => {
        if (loginFlag) {
            setTimeout(() => {
                setShowLoginModal(false)
            }, 300)
        }
    }, [loginFlag])

    return (
        <>
            <LogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal} />
            <UpdatePasswordModal updatePasswordModal={updatePasswordModal}
                setUpdatePasswordModal={setUpdatePasswordModal} />
            <LoginModal showloginModal={showloginModal} setShowLoginModal={setShowLoginModal} />
            <RegisterModal showRegisterModal={showRegisterModal} setShowRegisterModal={setShowRegisterModal} />
            
            
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Idea Developer</a>
                {isVerified && user ? <div class="nav-item dropdown mr-5">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {user.firstName}
                    </a>
                    <div class="dropdown-menu mr-5" aria-labelledby="navbarDropdownMenuLink">
                        <button class="btn btn-info" class="dropdown-item" onClick={() => setUpdatePasswordModal(true)}>Update Password</button>
                        <button class="btn btn-danger" class="dropdown-item" onClick={() => setLogoutModal(true)}>Logout</button>
                    </div>
                </div> :
                    <div>
                        <button type="button" onClick={()=>setShowRegisterModal(true)} className="btn btn-primary mx-1">
                            SIGNUP </button>
                        <button onClick={()=>setShowLoginModal(true)} type="button" className="btn btn-primary" >
                            LOGIN </button>
                    </div>
                 }
            </nav>
    </>
    )
}

export default LandingNav


