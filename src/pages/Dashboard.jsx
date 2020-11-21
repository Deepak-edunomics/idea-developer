import React, {useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getWorkspace, getGroups} from '../redux/actions/userAction'
import WorkSpaceCard from '../components/WorkSpaceCard'
import SideNav from '../components/SideNav'


const Dashboard = () => {
    const userData = useSelector(store => store.userRoot)
    const history = useHistory()
    const {workspaces, groups, user} = userData
    const dispatch = useDispatch()
    
    useEffect(() => {
            dispatch(getWorkspace())
            dispatch(getGroups())
    }, [])

    return (
        <>
             <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4">Workspaces</h1>
                        <div className="row">
                                {workspaces.length !==0 ? workspaces.map(workspace =>
                                    <WorkSpaceCard workspace={workspace} key={workspace._id} />
                                ): <h1>No Workspace found</h1>}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link className="btn btn-primary" to="/addWorkSpace">Add Workspace</Link>
                    </div>
                </div>
            </div> 
            

            
        </>

    )
}

export default Dashboard
