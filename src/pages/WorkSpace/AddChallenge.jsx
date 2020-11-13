import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import SideNav from '../../components/SideNav'

const AddChallenge = () => {
    const [challengeType, setChallengeType] = useState("")
    return (
        <div className="container-fluid mt-5">
            <form>
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                   
                        <div className="row">
                            <div className="col-md-3 m-auto">
                                <h3>Challenge Type</h3>

                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                              <input onChange={(e) => setChallengeType(e.target.value)} value={challengeType} type="text" className="form-control" id="addWorkspaceId" />
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
                                        <select className="form-control">
                                            <option value="">Select</option>
                                            <option value="Group1">Group 1</option>
                                            <option value="Group2">Group 2</option>
                                            <option value="Group3">Group 3</option>
                                            <option value="Group4">Group 4</option>
                                            <option value="Group5">Group 5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="form-group">Add Manually</label>
                                        <textarea className="form-control" />
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
                                        <select className="form-control">
                                            <option value="">Select</option>
                                            <option value="Group1">Group 1</option>
                                            <option value="Group2">Group 2</option>
                                            <option value="Group3">Group 3</option>
                                            <option value="Group4">Group 4</option>
                                            <option value="Group5">Group 5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="form-group">Add Manually</label>
                                        <textarea className="form-control" />
                                    </div>
                                </div>
                            </div>
                       </div>
                   
                    <div className="text-right mt-5">
                        <Link to="/workFlow" type="submit" className="btn btn-primary">Next</Link>

                    </div>
                    
                </div>
               
                </div>
                

            </form>

        </div>
    )
}

export default AddChallenge
