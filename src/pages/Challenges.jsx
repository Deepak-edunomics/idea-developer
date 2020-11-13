import React from 'react'
import SideNav from '../components/SideNav'
import "../CSS/index.css";
import ChallengeList from "../components/Challenges/ChallengeList";
import PostChallenge from "../components/Challenges/PostChallenge";

const Challenges = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                    <div>
                        <div className="table-margin">
                            <ChallengeList />

                        </div>
                        <PostChallenge />
                    </div>
                </div>
                <div className="col-md-2">

                </div>
            </div>

            
        </div>
    )
}

export default Challenges
