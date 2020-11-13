import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import { Col, Row, Modal, Form, FormGroup } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { addStageHelper } from '../redux/actions/userAction'
import WorkFlow from '../components/Workflow'


const EditWorkflow = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [stage, setStage] = useState({
        stageName: "", rules: {}
       
    })
   
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addStageHelper(stage))
        setTimeout(() => {
            setShow(false)
        }, 300)
        setStage({ ...stage, stageName: "" })
    }

   

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-50w">
                <Modal.Header>
                    <Modal.Title>Create Stage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <FormGroup>
                            <Form.Label>Stage Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setStage({ ...stage, stageName: e.target.value })} value={stage.stageName} />
                        </FormGroup>
                        <FormGroup>
                            <Form.Check label="Is this is ideation stage?" type="switch" id="custom-switch" />
                        </FormGroup>
                        <Button variant="contained" color="secondary" onClick={() => setShow(false)}>
                            Cancel
            </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Create
            </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            

            <div className="container-fluid mt-5">
                <Row>
                    <Col md={2}>
                        <SideNav />

                    </Col>
                    <Col md={9}>
                        <Row>
                            <h2>CREATE WORKFLOW</h2>
                            <Button onClick={() => setShow(true)} className="ml-auto" variant="dark">ADD STAGE</Button>
                        </Row>
                        <Row>
                            <Col md={12}>
                            {userData.stages.length !== 0 ? 
                                    userData.stages.map((stg, index) =>
                                    <WorkFlow setShowModal={setShow} stage={stg} key={index}/>
                                )
                                    : <h2>No stage to show, Kindly Add</h2>}
                                </Col>
                        </Row>

                    </Col>
                </Row>

            </div>

        </>

    )
}

export default EditWorkflow
