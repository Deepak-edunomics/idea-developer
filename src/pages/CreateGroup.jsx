import React, {useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SideNav from '../components/SideNav'
import WorkSpaceCard from '../components/WorkSpaceCard'
const list = [1, 2, 3, 4, 5, 6]

const users = [{ id: "1", name: "Deepak Singh" }, { id: "2", name: "kunal Singh" },
{ id: "3", name: "Pushkar Singh" }, { id: "4", name: "Raj Singh" }]

const CreateGroup = () => {
    const [show, setShow] = useState(false)


    return (
        <>
            {/* CREATE NEW GROUP, MODAL */}
            
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>CREATE NEW GROUP</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Close </Button>
         
                    <Button variant="primary" onClick={()=>setShow(false)}>Save Changed </Button>
                </Modal.Footer>
            </Modal>


            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />

                    </div>
                    <div className="col-md-10">


                        <div className="row">
                            <div className="col-md-10">
                                <h2>EmployeeGroups</h2>
                                <div className="row mt-5">


                                    {list.map((obj, index) =>
                                        <WorkSpaceCard key={index} />
                                    )}
                                </div>

                            </div>
                            <div className="col-md-2">
                                <button onClick={()=>setShow(true)} className="btn btn-primary" to="/addWorkSpace">Create New Group</button>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default CreateGroup
