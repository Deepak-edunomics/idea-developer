import React, {useState} from 'react'
import { Card, Button, Modal , Form, FormGroup, Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Group from '../components/Group'



const GroupCollection = ({ group }) => {
    const [show, setShow] = useState(false)
    const userData = useSelector(store=>store.userData)
    return (
        <>
            <Modal show={show} size="lg" onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{group.groupName }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <FormGroup>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th className="text-center">First Name</th>
                                        <th className="text-center">Last Name</th>
                                        <th className="text-center">email</th>
                                        <th className="text-center">Role</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.users.length !== 0 ? group.users.map((emp, index) =>

                                        <Group key={emp._id} index={index + 1}  employee={emp} />

                                    ) : <h1>No Empoloyee Found</h1>}
                                </tbody>
                            </Table>
                        </FormGroup>
                        <Button type="submit" variant="primary">Update</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        <div className="col-md-4 mb-5">
            <Card
                bg='info'
                text='white'
                style={{ width: '18rem', display: "inline-block" }}
                className="mb-2"
            >
                <Card.Header>{group.groupName}</Card.Header>
                <Card.Body className="d-flex">
                    <Button variant="light" onClick={()=>setShow(true)} className="ml-auto">View</Button>
                    <Button variant="danger" className="ml-auto">Delete</Button>
                </Card.Body>
            </Card>
            </div>
            </>
    )
}

export default GroupCollection





//component did mount

