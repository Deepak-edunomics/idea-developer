import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {addWorkspace} from '../redux/actions/userAction'



const AddWorkspace = () => {
    const userData = useSelector(store=>store.userRoot)
    const dispatch = useDispatch()

    const [workspace, setWorkspace] = useState("")

    const workspaceFormHandler = (e) => {
        e.preventDefault()
        dispatch(addWorkspace({title: workspace}))
        
    }
    return (
        <div className="modal fade" id="addWorkspaceModal" tabIndex="-1" aria-labelledby="addWorkspaceModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addWorkspaceModal">ADD WORKSPACE</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={workspaceFormHandler}>
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
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkspace
