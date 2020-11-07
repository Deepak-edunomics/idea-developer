import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {getEmployees} from '../../redux/actions/userAction'

import SideNav from '../../components/SideNav'




const AddWorkSpace = () => {
    const userData = useSelector(store => store.userRoot)


    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [moderator, setModerator] = useState("")
    const [challengetype, setChallengeType] = useState("")
    const [moderators, setModerators] = useState([])

    useEffect(() => {
        if (userData.employees.length === 0) {
            dispatch(getEmployees())
        }
    },[])

    useEffect(() => {
        setModerators(userData.employees.filter(emp => emp.role === "moderator"))
        console.log(userData)
    }, [userData.employees])

    console.log("moderatos",moderators)
    const workspaceFormHandler = (e) => {
        e.preventDefault()
        // dispatch(addWorkspace({title: }))

    }
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                    <h1>Test Workspace</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Description</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeRole">Moderator</label>
                            <select onChange={(e) => setModerator(e.target.value)} value={moderator} className="form-control">
                                <option>Select</option>
                                {moderators.map(mod =>
                                    <option key={mod._id} value={mod._id}>{mod.firstName + " " + mod.lastName}</option>

                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Challenge Type</label>
                            <input onChange={(e) => setChallengeType(e.target.value)} value={challengetype} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="text-right">
                            <Link to="/addChallenge" type="submit" className="btn btn-primary">Next</Link>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddWorkSpace
