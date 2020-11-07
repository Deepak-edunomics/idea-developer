import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Form, FormGroup, Button, Table, Modal,Row, Col } from 'react-bootstrap'

import { getEmployees, createRole, getRoles } from '../redux/actions/userAction'


import SideNav from '../components/SideNav'
import Role from '../components/Role'
import Loader from '../components/Loader'



const Roles = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [role, setRole] = useState("")
    const [show, setShow] = useState(false)
    const [createWs, setCreateWs] = useState(false)
    const [viewWs, setViewWs] = useState(false)
    const [editWs, setEditWs] = useState(false)
    const [deleteWs, setDeleteWs] = useState(false)
    const [createCllg, setCreateCllg] = useState(false)
    const [viewCllg, setViewCllg] = useState(false)
    const [editCllg, setEditCllg] = useState(false)
    const [deleteCllg, setDeleteCllg] = useState(false)
    const [createIdea, setCreateIdea] = useState(false)
    const [viewIdea, setViewIdea] = useState(false)
    const [editIdea, setEditIdea] = useState(false)
    const [deleteIdea, setDeleteIdea] = useState(false)
    const [createPipelineCllg, setCreatePipelineCllg] = useState(false)
    const [viewPipelineCllg, setViewPipelineCllg] = useState(false)
    const [editPipelineCllg, setEditPipelineCllg] = useState(false)
    const [deletePipelineCllg, setDeletePipelineCllg] = useState(false)
    const [createPipelineIdea, setCreatePipelineIdea] = useState(false)
    const [editPipelineIdea, setEditPipelineIdea] = useState(false)
    const [viewPipelineIdea, setViewPipelineIdea] = useState(false)
    const [deletePipelineIdea, setDeletePipelineIdea] = useState(false)


    useEffect(() => {
        if (userData.employees.length === 0) {
            dispatch(getEmployees())
        }
        if (userData.roles.length === 0) {
            dispatch(getRoles())
        }
    }, [])

    useEffect(() => {
        if (createWs) {
            setEditWs(true)
            setDeleteWs(true)
            setViewWs(true)
        }
        if(createCllg){
            setEditCllg(true)
            setDeleteCllg(true)
            setViewCllg(true)
        }
        if (createIdea) {
            setEditIdea(true)
            setDeleteIdea(true)
            setViewIdea(true)
        }
        if (createPipelineCllg) {
            setEditPipelineCllg(true)
            setDeletePipelineCllg(true)
            setViewPipelineCllg(true)
        }
        if (createPipelineIdea) {
            setEditPipelineIdea(true)
            setDeletePipelineIdea(true)
            setViewPipelineIdea(true)
        }
    },[createWs,createCllg,createIdea,createPipelineCllg,createPipelineIdea])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRole({
            email: userData.user.email,
            organization: userData.user.organization,
            role,
            createWs, editWs, deleteWs, viewWs,
            createIdea, editIdea, deleteIdea, viewIdea,
            createCllg, editCllg, deleteCllg, viewCllg,
            createPipelineCllg, editPipelineCllg, deletePipelineCllg, viewPipelineCllg,
            createPipelineIdea, editPipelineIdea, deletePipelineIdea, viewPipelineIdea
        }))
        setTimeout(() => {
            setShow(false)
        },2000)
        
    }
    return (
        <>
            {/* ADD ROLE MODAL */}

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD ROLE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Form.Label>Role name</Form.Label>
                            <Form.Control value={role} onChange={e => setRole(e.target.value)} type="text" />
                        </FormGroup>
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
                                            <Form.Check checked={createPipelineIdea} onChange={(e)=>setCreatePipelineIdea(!createPipelineIdea)} type="checkbox" />
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
                        {userData.loader ? <Loader /> : <Button type="submit" variant="primary">Add</Button> }
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
                        <h1 className="display-4">Roles</h1>
                        <Row className="mt-5">
                            {}
                                {userData.roles.length !== 0 ? userData.roles.map(rol =>
                                    <Role key={rol._id} role={rol}/>
                                ): <h2>No roles found</h2>}
                         </Row>
                      
                        
                    

                </div>
                    <div className="col-md-2">
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Add New Role
          </Button>

                </div>
            </div>


            </div>
            </>
    )
}

export default Roles
