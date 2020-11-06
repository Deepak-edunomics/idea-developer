import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {userLogout} from '../redux/actions/userAction'


const LogoutModal = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    



    return (
        <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="logoutModal">LOGOUT</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h3>Are you Sure want to Logout ?</h3>
                        <div className="mt-3">
                            <button onClick={()=>dispatch(userLogout(history))} className="btn btn-danger">Yes</button>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogoutModal

