import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {userLogout} from '../redux/actions/userAction'
import {Modal, Button} from 'react-bootstrap'

const LogoutModal = ({logoutModal,setLogoutModal}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    



    return (
       
        <Modal show={logoutModal} onHide={()=>setLogoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>LOGOUT</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                    <h3>Are you Sure want to Logout ?</h3>
                    <div className="mt-3">
                        <button onClick={() => dispatch(userLogout(history))} className="btn btn-danger">Yes</button>
                    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setLogoutModal(false)}>
                    Close
          </Button>
          
        </Modal.Footer>
      </Modal>
       
            
    )
}

export default LogoutModal

