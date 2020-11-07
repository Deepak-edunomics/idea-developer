import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Button, Card, Modal, Form, Table, FormGroup } from 'react-bootstrap'

import Loader from './Loader'

const Role = (props) => {
    const userData = useSelector(store=>store.userRoot)
    const [show, setShow] = useState(false)
    const [createWs, setCreateWs] = useState(props.role.createWs)
    const [viewWs, setViewWs] = useState(props.role.viewWs)
    const [editWs, setEditWs] = useState(props.role.editWs)
    const [deleteWs, setDeleteWs] = useState(props.role.deleteWs)
    const [createCllg, setCreateCllg] = useState(props.role.createCllg)
    const [viewCllg, setViewCllg] = useState(props.role.viewCllg)
    const [editCllg, setEditCllg] = useState(props.role.editCllg)
    const [deleteCllg, setDeleteCllg] = useState(props.role.deleteCllg)
    const [createIdea, setCreateIdea] = useState(props.role.createIdea)
    const [viewIdea, setViewIdea] = useState(props.role.viewIdea)
    const [editIdea, setEditIdea] = useState(props.role.editIdea)
    const [deleteIdea, setDeleteIdea] = useState(props.role.deleteIdea)
    const [createPipelineCllg, setCreatePipelineCllg] = useState(props.role.createPipelineCllg)
    const [viewPipelineCllg, setViewPipelineCllg] = useState(props.role.viewPipelineCllg)
    const [editPipelineCllg, setEditPipelineCllg] = useState(props.role.editPipelineCllg)
    const [deletePipelineCllg, setDeletePipelineCllg] = useState(props.role.deletePipelineCllg)
    const [createPipelineIdea, setCreatePipelineIdea] = useState(props.role.createPipelineIdea)
    const [editPipelineIdea, setEditPipelineIdea] = useState(props.role.editPipelineIdea)
    const [viewPipelineIdea, setViewPipelineIdea] = useState(props.role.viewPipelineIdea)
    const [deletePipelineIdea, setDeletePipelineIdea] = useState(props.role.deletePipelineIdea)



    return (
        <>
            {/* SHOW PERMISSIONS MODAL */}

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{ props.role.role.toUpperCase()} Permission's</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <FormGroup>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Permission Name</th>
                                        <th className="text-center">Create</th>
                                        <th className="text-center">Edit</th>
                                        <th className="text-center">Delete</th>
                                        <th className="text-center">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Workspace</td>
                                        <td className="text-center">
                                            <Form.Check checked={createWs} onChange={(e) => setCreateWs(!createWs)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={editWs} onChange={(e) => setEditWs(!editWs)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={deleteWs} onChange={(e) => setDeleteWs(!deleteWs)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={viewWs} onChange={(e) => setViewWs(!viewWs)} type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Challenge</td>
                                        <td className="text-center">
                                            <Form.Check checked={createCllg} onChange={(e) => setCreateCllg(!createCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={editCllg} onChange={(e) => setEditCllg(!editCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={deleteCllg} onChange={(e) => setDeleteCllg(!deleteCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={viewCllg} onChange={(e) => setViewCllg(!viewCllg)} type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Idea</td>
                                        <td className="text-center">
                                            <Form.Check checked={createIdea} onChange={(e) => setCreateIdea(!createIdea)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={editIdea} onChange={(e) => setEditIdea(!editIdea)} type="checkbox" />

                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={deleteIdea} onChange={(e) => setDeleteIdea(!deleteIdea)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={viewIdea} onChange={(e) => setViewIdea(!viewIdea)} type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Challenge Pipeline</td>
                                        <td className="text-center">
                                            <Form.Check checked={createPipelineCllg} onChange={(e) => setCreatePipelineCllg(!createPipelineCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={editPipelineCllg} onChange={(e) => setEditPipelineCllg(!editPipelineCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={deletePipelineCllg} onChange={(e) => setDeletePipelineCllg(!deletePipelineCllg)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={viewPipelineCllg} onChange={(e) => setViewPipelineCllg(!viewPipelineCllg)} type="checkbox" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Idea Pipeline</td>
                                        <td className="text-center">
                                            <Form.Check checked={createPipelineIdea} onChange={(e) => setCreatePipelineIdea(!createPipelineIdea)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={editPipelineIdea} onChange={(e) => setEditPipelineIdea(!editPipelineIdea)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={deletePipelineIdea} onChange={(e) => setDeletePipelineIdea(!deletePipelineIdea)} type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <Form.Check checked={viewPipelineIdea} onChange={(e) => setViewPipelineIdea(!viewPipelineIdea)} type="checkbox" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </FormGroup>
                        {userData.loader ? <Loader /> : <Button type="submit" onClick={()=>alert("later it will be function")} variant="primary">Update</Button>}
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
                    <Card.Header>{props.role.organization}</Card.Header>
                    <Card.Body className="d-flex">
                        <Card.Title className="my-auto" > {props.role.role} </Card.Title>
                        <Button variant="light" className="ml-auto" onClick={() => setShow(true)}>Permissions</Button>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}

export default Role
