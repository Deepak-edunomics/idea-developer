import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showLoginModalHelper, showSignupModalHelper } from '../redux/actions/userAction'
import LogoutModal from './LogoutModal'



const LandingNav = (props) => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [logoutModal, setLogoutModal] = useState(false)

    return (
        <>
            <LogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal}/>

        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Idea Developer</a>
            {userData.isVerified ? <>{userData.isVerified?
                <div class="nav-item dropdown mr-5">
                   <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         {userData.user.firstName}  {userData.user.lastName ? userData.user.lastName : null}
                     </a>
                     <div class="dropdown-menu mr-5" aria-labelledby="navbarDropdownMenuLink">
                         <Link data-toggle="modal" data-target="#resetPasswordModal" to="/dashboard" class="dropdown-item">Reset Password</Link>
                         <Link data-toggle="modal" onClick={()=>setLogoutModal(true)} class="dropdown-item" >Logout</Link>
                    </div>
                </div>
                :
                <div>   
                    <button type="button" className="btn btn-primary mx-1" data-toggle="modal" data-target="#signUpModal">
                        SIGNUP  </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                        LOGIN </button>
                </div>
                
        }</> :
                <div>
                    <button type="button" className="btn btn-primary mx-1" onClick={()=>dispatch(showSignupModalHelper(true))}>
                        SIGNUP  </button>
                    <button type="button" className="btn btn-primary" onClick={()=>dispatch(showLoginModalHelper(true))}>
                        LOGIN </button>
                </div>

            }
        </nav>

            </>

    )
}

export default LandingNav


