import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button, Form, FormGroup } from 'react-bootstrap'
import { editEmployee, deleteEmployee} from '../redux/actions/userAction'



const Employee = (props) => {
    const dispatch = useDispatch()
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [firstName, setFirstName] = useState(props.employee.firstName)
    const [lastName, setLastName] = useState(props.employee.lastName)
    const [role, setRole] = useState(props.employee.role)





    const formHandler = (e) => {
        e.preventDefault()
       

        dispatch(editEmployee({ firstName, lastName, role }, props.employee._id))
        setShowEditModal(false)
    }

    const deleteEmployeeHandler = () => {
        dispatch(deleteEmployee(props.employee._id))
        setShowDeleteModal(false)
    }


    return (
        <>
            {/* EDIT MODAL */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT EMPLOYEE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <FormGroup>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" onChange={(e) => setRole(e.target.value)} value={role} />
                        </FormGroup>
                        <Button type="submit" varient="primary">Submit</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            {/* DELETE MODAL */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>DELETE EMPLOYEE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure want to Delete ?</h4>
                    <Button className="mt-2" variant="danger" onClick={deleteEmployeeHandler}>Delete</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.employee.firstName}</td>
                <td>{props.employee.lastName}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.role}</td>
                <td><button onClick={() => setShowEditModal(true)} type="button" class="btn btn-outline-warning">Edit</button></td>
                <td><button onClick={() => setShowDeleteModal(true)} type="button" class="btn btn-outline-danger">Delete</button></td>
            </tr>
        </>
    )
}

export default Employee
