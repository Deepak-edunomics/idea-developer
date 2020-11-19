import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { getEmployees, addWorkspace } from '../../redux/actions/userAction'
import { Typeahead } from 'react-bootstrap-typeahead'

import SideNav from '../../components/SideNav'
import Loader from '../../components/Loader'


const AddWorkSpace = () => {
    const userData = useSelector(store => store.userRoot)
    const {employees, loader} = userData
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [challengeType, setChallengeType] = useState("")
    const [moderator, setModerator] = useState([])
    const [moderators, setModerators] = useState([])

    useEffect(() => {
        if (employees.length === 0) {
            dispatch(getEmployees())
        }
    },[])

    useEffect(() => {
        if (employees.length !== 0) {
            const tempData = userData.employees.filter(emp => emp.role === "moderator")
            let filteredEmployees = []
            for (var i = 0; i < tempData.length; i++) {
                let name = tempData[i].firstName + " " + tempData[i].lastName
                filteredEmployees.push({ name, _id: tempData[i]._id })
            }
            setModerator(filteredEmployees)
        }
    }, [employees])

  
    const workspaceFormHandler = (e) => {
        e.preventDefault()
        let moderatorsId = []
        for (var i = 0; i < moderators.length; i++){
            moderatorsId.push(moderators[i]._id)
        }
        dispatch(addWorkspace({ title, description, challengeType, moderators: moderatorsId },history))
    }
    
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                    <h1>Workspace</h1>
                    <form onSubmit={workspaceFormHandler}>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Title</label>
                            <input required onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Description</label>
                            <textarea required onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeRole">Moderator</label>
                            <Typeahead required onChange={setModerators}
                                selected = {moderators}
                                clearButton
                                id="#employeeRole"
                                labelKey="name"
                                multiple
                                options={moderator}
                                placeholder="Choose a moderator..."
                                                                   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Challenge Type</label>
                            <input required onChange={(e) => setChallengeType(e.target.value)} value={challengeType} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="text-right">
                            {loader ? <Loader /> : <button type="submit" className="btn btn-primary">Next</button>}
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddWorkSpace
