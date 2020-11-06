import React from 'react'
import { Link } from 'react-router-dom'

import SideNav from '../../components/SideNav'

const AddChallenge = () => {
    const challenges = ["Challenge 1", "Challenge 2", "Challenge 3", "Challenge 4", "Challenge 5"]
    return (
        <div className="container-fluid mt-5">
            <form>
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                   
                        <div className="row">
                            <div className="col-4">
                                <h3>Demo workspace</h3>

                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Challenge Type</option>
                                        {challenges.map((challenge, index) =>
                                            <option key={index} value={challenge}>{challenge}</option>
                                        )}
                                    </select> 
                                </div>
                            </div>
                            <div className="col-4">
                               

                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-3 m-auto">
                                <button type="button" className="btn btn-info">Add Layer</button>

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
                            <div className="col-md-3">

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
