import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEmployee } from '../redux/actions/userAction'
import Loader from '../components/Loader'
import {Modal, Button} from 'react-bootstrap'

const AddEmployee = ({show, setShow}) => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addEmployee({ email, firstName, lastName, role, password, organization: userData.user.organization }))
        setTimeout(() => {
            setShow(false)
        },400)
    }

    
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD EMPLOYEE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formHandler}>
                        <div className="form-group">
                            <label htmlFor="employeeFirstNameId">First Name</label>
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="employeeFirstNameId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeLastNameId">Last Name</label>
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="employeeLastNameId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeEmailId">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="employeeEmailId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeRole">Role</label>
                            <select onChange={(e) => setRole(e.target.value)} id="#employeeRole" className="form-control">
                                <option>Select</option>
                                <option value="Front End">Front End</option>
                                <option value="Back End">Back End</option>
                                <option value="Full Stack">Full Stack</option>
                                <option value="moderator">Moderator</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeePasswordId">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="employeePasswordId" />
                        </div>
                        {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            </>
    )
}

export default AddEmployee
