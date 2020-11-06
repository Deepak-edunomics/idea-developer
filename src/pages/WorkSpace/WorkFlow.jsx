import React from 'react'
import {Link} from 'react-router-dom'
import SideNav from '../../components/SideNav'

const workFlows = [{ workFlowName: "Dummy1", challengeStage:"1", ideaStage:"4" },
    { workFlowName: "Dummy2", challengeStage:"5", ideaStage:"4" },
    { workFlowName: "Dummy3", challengeStage:"6", ideaStage:"3" },
    { workFlowName: "Dummy4", challengeStage:"2", ideaStage:"6" },
    { workFlowName: "Dummy5", challengeStage:"3", ideaStage:"7" },
    { workFlowName: "Dummy6", challengeStage:"7", ideaStage:"4" } ]

const WorkFlow = () => {

   

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />


                </div>
                <div className="col-md-8">
                    <h3>Challenge Work Flow</h3>
                    <div className="row">
                        {workFlows.map((workFlow, index) =>
                            <div key={index} className="col-md-4">
                                <div class="jumbotron" style={{ display: "inline-block" }} >
                                    <p class="lead">
                                        <h1>{workFlow.workFlowName}</h1>
                                        <h4>Challenge Stage: {workFlow.challengeStage}</h4>
                                        <h4>Idea Stage: {workFlow.ideaStage}</h4>
                                    </p>
                                </div>
                            </div>)}
                        <div className="text-right">
                            <button onClick={(e)=>alert("Soon pop up will come for new work flow")} className="btn btn-info">Add New WorkFlow</button>
                        </div>

                    </div>
                    

                </div>
                <div className="col-md-2">
                    <Link to="/" className="btn btn-info">Next</Link>

                </div>
            </div>
            
        </div>
    )
}

export default WorkFlow
