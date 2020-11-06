import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const LandingNav = () => {
    const userData = useSelector(store => store.userRoot)
    return (

        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Idea Developer</a>
            {userData.user ? <>{userData.user ?
                <div class="nav-item dropdown mr-5">
                   <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         {userData.user.firstName}  {userData.user.lastName ? userData.user.lastName : null}
                     </a>
                     <div class="dropdown-menu mr-5" aria-labelledby="navbarDropdownMenuLink">
                         <Link data-toggle="modal" data-target="#resetPasswordModal" to="/dashboard" class="dropdown-item">Reset Password</Link>
                         <Link data-toggle="modal" data-target="#logoutModal" class="dropdown-item" >Logout</Link>
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
                    <button type="button" className="btn btn-primary mx-1" data-toggle="modal" data-target="#signUpModal">
                        SIGNUP  </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                        LOGIN </button>
                </div>

            }
        </nav>


    )
}

export default LandingNav


