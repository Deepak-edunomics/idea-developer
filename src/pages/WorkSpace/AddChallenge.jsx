import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead'
import { getEmployees, getGroups, updateWorkspace } from '../../redux/actions/userAction'
import Loader from '../../components/Loader'
import SideNav from '../../components/SideNav'


const AddChallenge = () => {
    const userData = useSelector(store => store.userRoot)
    const history = useHistory()
    const dispatch = useDispatch()
    const {employees} = userData
    const { currentWorkspace , loader, groups} = userData
    const [challengeType, setChallengeType] = useState("")
    const [allEmployee, setAllEmployee] = useState([])
    const [ideaMemberManually, setIdeaMemberManually] = useState([])
    const [challengeMemberManually, setChallengeMemberManually] = useState([])
    const [ideaGroup, setIdeaGroup] = useState("")
    const [challengeGroup, setChallengeGroup] = useState("")


    useEffect(() => {
        dispatch(getGroups())
        dispatch(getEmployees())
    }, [])


    useEffect(() => {
        if (!currentWorkspace) {
            history.push('/')
        }
        else {
            setChallengeType(currentWorkspace.challengeType)
        }
    }, [])


    useEffect(() => {
        if (employees.length !== 0) {
            let tempEmployees = []
            for (var i = 0; i < employees.length; i++) {
                let name = employees[i].firstName + " " + employees[i].lastName
                tempEmployees.push({ name, _id: employees[i]._id })
            }
            setAllEmployee(tempEmployees)
        }
    }, [employees])


    const formHandler = (e) => {
        e.preventDefault()
        const ideaMembers = []
        const challengeMembers = []

        if (ideaMemberManually.length !== 0) {
            for (var i = 0; i < ideaMemberManually.length; i++){
                ideaMembers.push(ideaMemberManually[i]._id)
            }
        }
        if (ideaGroup) {
            const ideaFilter = groups.find(obj => obj._id === ideaGroup)
            if (ideaFilter) {
                for (var i = 0; i < ideaFilter.users.length; i++){
                    ideaMembers.push(ideaFilter.users[i]._id)
                }
            }
        }

        if (challengeMemberManually.length !== 0) {
            for (var i = 0; i < challengeMemberManually.length; i++) {
                challengeMembers.push(challengeMemberManually[i]._id)
            }
        }
        if (challengeGroup) {
            const challengeFilter = groups.find(obj => obj._id === challengeGroup)
            if (challengeFilter) {
                for (var i = 0; i < challengeFilter.users.length; i++) {
                    challengeMembers.push(challengeFilter.users[i]._id)
                }
            }
        }

        dispatch(updateWorkspace({
            ideaMembers: [...new Set(ideaMembers)],
            challengeMembers: [...new Set(challengeMembers)]
        }, currentWorkspace._id,history))
    }

   

   

    return (
        <div className="container-fluid mt-5">
            <form onSubmit={formHandler}>
            <div className="row">
                <div className="col-md-2">
                        <SideNav />
                </div>
                    <div className="col-md-8">
                        <h2 className="text-center mb-5">{currentWorkspace && currentWorkspace.title.toUpperCase() }</h2>
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <h3>Challenge Type</h3>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                              <input disabled onChange={(e) => setChallengeType(e.target.value)} value={challengeType} type="text" className="form-control" id="addWorkspaceId" />
                                </div>
                            </div>
                            
                        </div>

                        <div className="row mt-5">
                            <div className="row">
                                <div className="col-md-3 m-auto">
                                    <h3>Challenges</h3>
                                </div>
                                <div className="col-md-6">
                                    
                                    <div className="form-group">
                                        <label htmlFor="" className="form-group" >Select from Existing Group</label>
                                        <select value={challengeGroup} onChange={(e)=>setChallengeGroup(e.target.value)} className="form-control">
                                            <option>Select</option>
                                            {groups.length !== 0 ? groups.map(group =>
                                                <option value={group._id}>{group.groupName}</option>
                                            ): null}
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label  className="form-group">Add Manually</label>
                                        <Typeahead required onChange={setChallengeMemberManually}
                                            selected={challengeMemberManually}
                                            clearButton
                                            id=""
                                            labelKey="name"
                                            multiple
                                            options={allEmployee}
                                            placeholder="Choose challenge members manually"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 m-auto">
                                    <h3>Ideas</h3>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="form-group" >Select from Existing Group</label>
                                        <select value={ideaGroup} onChange={(e) => setIdeaGroup(e.target.value)} className="form-control">
                                            <option >Select</option>
                                            {groups.length !== 0 ? groups.map(group =>
                                                <option value={group._id}>{group.groupName}</option>
                                            ) : null}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label  className="form-group">Add Manually</label>
                                        <Typeahead required onChange={setIdeaMemberManually}
                                            selected={ideaMemberManually}
                                            clearButton
                                            id=""
                                            labelKey="name"
                                            multiple
                                            options={allEmployee}
                                            placeholder="Choose idea members manually"
                                        />
                                    </div>
                                </div>
                            </div>
                       </div>
                        <div className="text-right mt-5">
                            {loader ? <Loader /> : <button type="submit" className="btn btn-primary">Next</button>}
                    </div>
                </div>
                </div>
            </form>
        </div>
        
    )
}

export default AddChallenge
