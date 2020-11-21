import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { Modal, Button, Form, Card } from 'react-bootstrap'
import SideNav from '../../components/SideNav'

import { addWorkflow, getWorkflow } from '../../redux/actions/userAction'
import Loader from '../../components/Loader'


const WorkFlow = () => {
    const userData = useSelector(store => store.userRoot)
    const { currentWorkspace, workflows, loader} = userData
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false)
    const [workflowName, setWorkflowName] = useState("")

    useEffect(() => {
        if (currentWorkspace) {
            dispatch(getWorkflow(currentWorkspace._id))
        }
        else {
            history.push('/dashboard')
        }
    }, [currentWorkspace])

    const formHandler = (e) => {
        e.preventDefault()
        if (currentWorkspace) {
            dispatch(addWorkflow({ workflowName, workspaceId: currentWorkspace._id}))
        }
        setTimeout(() => {
            setShow(false)
        },800)
        
    }
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD NEW WORKFLOW</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Workflow Name</Form.Label>
                            <Form.Control onChange={(e)=>setWorkflowName(e.target.value)} value={workflowName} type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add New Workflow
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>


            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                        <h3>Challenge Work Flow</h3>
                        {!loader ? <div className="row">
                            {workflows.length !== 0 ? workflows.map((workFlow, index) =>
                                <div key={index} className="col-md-4 mb-5">
                                    <Card
                                        bg='info'
                                        text='white'
                                        style={{ width: '18rem', display: "inline-block" }}
                                        className="mb-2"
                                    >
                                        <Card.Header>{workFlow.workflowName.toUpperCase()}</Card.Header>
                                        <Card.Body>
                                            <Card.Title className="my-auto" >Challenge Stage: {workFlow.challengeStage} </Card.Title>
                                            <Card.Title className="my-auto" >Idea Stage: {workFlow.ideaStage} </Card.Title>
                                            <Button as={Link} to={`/workflow/${workFlow._id}`} variant="dark">View</Button>
                                        </Card.Body>
                                    </Card>
                                </div>) : <h2>No Workflow to show</h2>}
                        </div>: <Loader />}
                        
                        <div className="row">
                            <div className="text-right">
                                <button onClick={(e) => setShow(true)} className="btn btn-info">Add New WorkFlow</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-2">
                        <Link to="/" className="btn btn-info">Next</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WorkFlow
