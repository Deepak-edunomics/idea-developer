import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../redux/actions/userAction'
import { Modal, Button } from 'react-bootstrap'
import Loader from './Loader'

const ResetPassword = ({ updatePasswordModal, setUpdatePasswordModal }) => {
    const dispatch = useDispatch()
    const userData = useSelector(store => store.userRoot)
    const { loader, passworUpdateFlag} = userData
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(updatePassword({ oldPassword, newPassword }))
       
    }

    useEffect(() => {
        if (passworUpdateFlag) {
            setTimeout(() => {
                setUpdatePasswordModal(false)
            }, 300)
        }
    }, [passworUpdateFlag])
   
    return (
        <>
            <Modal show={updatePasswordModal} onHide={() => setUpdatePasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE PASSWORD</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                    <form >
                        <form onSubmit={formHandler}>
                            <div class="form-group">
                                <label for="oldPasswordId">Old Password</label>
                                <input onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} class="form-control" id="oldPasswordId" />
                            </div>
                            <div class="form-group">
                                <label for="newPasswordId">New Password</label>
                                <input onChange={(e) => setNewPassword(e.target.value)} type="password" value={newPassword} class="form-control" id="newPasswordId" />
                            </div>
                            {passworUpdateFlag ? <div class="alert alert-success" role="alert">
                                Password Updated Successfully
                             </div>: null}
                           
                            {loader ? <Loader /> : <button type="submit" class="btn btn-primary">Submit</button>}
                        </form>
                    </form>
        </Modal.Body>
        <Modal.Footer>
                    <Button variant="secondary" onClick={() => setUpdatePasswordModal(false)}>
                    Close
          </Button>
        </Modal.Footer>
      </Modal>
            </>
    )
}

export default ResetPassword
