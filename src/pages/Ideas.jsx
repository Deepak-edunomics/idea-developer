import React from 'react'
import SideNav from '../components/SideNav'

import IdeasList from '../components/Idea/IdeaList'
import PostIdea from '../components/Idea/PostIdea'


const Ideas = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />

                </div>
                <div className="col-md-8">
                    <>
                        <h5>Ideas Here</h5>
                        <div className="table-margin">
                            <IdeasList />
                        </div>
                        <PostIdea />
                    </>

                </div>
                <div className="col-md-2">

                </div>
            </div>


        </div>
    )
}

export default Ideas
