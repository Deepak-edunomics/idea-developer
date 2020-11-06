import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import SideNav from '../../components/SideNav'



const AddWorkSpace = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()

    const [workspace, setWorkspace] = useState("")
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
                            <input onChange={(e) => setWorkspace(e.target.value)} value={workspace} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Description</label>
                            <textarea onChange={(e) => setWorkspace(e.target.value)} value={workspace} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Moderator</label>
                            <input onChange={(e) => setWorkspace(e.target.value)} value={workspace} type="text" className="form-control" id="addWorkspaceId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addWorkspaceId">Challenge Type</label>
                            <input onChange={(e) => setWorkspace(e.target.value)} value={workspace} type="text" className="form-control" id="addWorkspaceId" />
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
