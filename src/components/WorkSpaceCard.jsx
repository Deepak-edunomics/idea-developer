import React from 'react'
import {useDispatch} from 'react-redux'
import { useHistory, Link} from 'react-router-dom'
import {setCurrentWorkspace} from '../redux/actions/userAction'

const WorkSpaceCard = ({ workspace }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const clickHandler = () => {
        dispatch(setCurrentWorkspace(workspace))
        history.push('/addChallenge')
    }

    return (
        <div className="col-md-6">
            <div class="jumbotron" style={{ display: "inline-block" }} >
                <h3>{workspace.title}</h3>
                <h4>Challenge Type: {workspace.challengeType}</h4>
                <p>{workspace.description}</p>
                <h5>Moderators {workspace.moderators.length}</h5>
                <p class="lead">
                        {(workspace.ideaMembers.length === 0 || workspace.challengeMembers.length === 0)  && <button onClick={clickHandler} class="my-2 btn btn-info" >Add Member</button>}
                </p>
                {(workspace.ideaMembers.length !== 0 || workspace.challengeMembers.length !== 0) && <Link to="/workflow">Workflow</Link>}
            </div>
        </div>
    )
}

export default WorkSpaceCard
