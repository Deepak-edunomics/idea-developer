import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {resetPassword} from '../redux/actions/userAction'
import Loader from './Loader'

const ResetPassword = () => {
    const dispatch = useDispatch()
    const userData = useSelector(store=>store.userRoot)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(resetPassword({currPassword:oldPassword, newPassword}))
        
        
    }
    return (
        <div className="modal fade" id="resetPasswordModal" tabIndex="-1" aria-labelledby="resetPasswordModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="resetPasswordModal">RESET PASSWORD</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <form onSubmit={formHandler}>
                                <div class="form-group">
                                    <label for="oldPasswordId">Old Password</label>
                                    <input onChange={(e)=>setOldPassword(e.target.value)} type="password" value={oldPassword} class="form-control" id="oldPasswordId"/>
                                </div>
                                <div class="form-group">
                                    <label for="newPasswordId">New Password</label>
                                    <input onChange={(e)=>setNewPassword(e.target.value)} type="password" value={newPassword} class="form-control" id="newPasswordId" />
                                </div>
                                {userData.loader ? <Loader /> : <button type="submit" class="btn btn-primary">Submit</button>}
                            </form>
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

export default ResetPassword
