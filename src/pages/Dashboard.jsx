import React from 'react'
import {Link} from 'react-router-dom'
import Addworkspace from '../components/AddWorkspace'
import WorkSpaceCard from '../components/WorkSpaceCard'
import SideNav from '../components/SideNav'

const Dashboard = () => {

    const list = [1,2,3,4,5]
    return (
        <>
            <Addworkspace />
             <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4">Workspaces</h1>
                        <div className="row">
                                {list.map((obj, index) =>
                                    <WorkSpaceCard key={index} />
                                )}
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
