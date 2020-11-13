import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PipelineHeadBar from "../components/Utilities/PipelineHeadBar";
import PipelineCard from "../components/Utilities/PipelineCard";
import PipelineChallengeCard from "../components/Challenges/PipelineChallengeCard";
import "../CSS/index.css";





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
}));



const challengePreData = [
    {
        title: "challenge title 1",
    },
    {
        title: "challenge title 1",
    },
    {
        title: "challenge title 1",
    },
];

const challengePostData = [
    {
        title: "challenge title 1",
        views: "270",
        ideas: "120",
        comments: "100",
        like: "220",
        rating: "4.2",
    },
    {
        title: "challenge title 1",
        views: "270",
        ideas: "120",
        comments: "100",
        like: "220",
        rating: "4.2",
    },
    {
        title: "challenge title 1",
        views: "270",
        ideas: "120",
        comments: "100",
        like: "220",
        rating: "4.2",
    },
];
export default function ChallengePipeline() {
    const classes = useStyles();

    return (
        <div className="pipeline">
            <h3>Challenge Pipeline</h3>
            <Grid container className={classes.root} spacing={1} row>
                <Grid item xs={12} sm={6} lg={3} md={3} justify="center" spacing={3} className="pipeline-streams">

                    <PipelineHeadBar heading="Submitted" />
                    {challengePreData &&
                        challengePreData.map((chllng) => (
                            <div className="pipeline-cards">
                                <PipelineCard title={chllng.title} />
                            </div>

                        ))}
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3} justify="center" spacing={3} className="pipeline-streams">
                    <PipelineHeadBar heading="In Review" />
                    {challengePreData &&
                        challengePreData.map((chllng) => (
                            <div className="pipeline-cards">
                                <PipelineCard title={chllng.title} />
                            </div>

                        ))}

                </Grid>

                <Grid item xs={12} sm={6} lg={3} md={3} justify="center" spacing={3} className="pipeline-streams">
                    <PipelineHeadBar heading="Live" />
                    {challengePostData &&
                        challengePostData.map((chllngpost) => (
                            <div className="pipeline-cards">
                                <PipelineChallengeCard
                                    title={chllngpost.title}
                                    views={chllngpost.views}
                                    ideas={chllngpost.ideas}
                                    comments={chllngpost.comments}
                                    like={chllngpost.like}
                                    rating={chllngpost.rating}
                                />
                            </div>

                        ))}

                </Grid>

                <Grid item xs={12} sm={6} lg={3} md={3} justify="center" spacing={3} className="pipeline-streams">
                    <PipelineHeadBar heading="Closed" />
                    {challengePostData &&
                        challengePostData.map((chllngpost) => (
                            <div className="pipeline-cards">
                                <PipelineChallengeCard
                                    title={chllngpost.title}
                                    views={chllngpost.views}
                                    ideas={chllngpost.ideas}
                                    comments={chllngpost.comments}
                                    like={chllngpost.like}
                                    rating={chllngpost.rating}
                                />
                            </div>

                        ))}
                </Grid>

            </Grid>


        </div>
    );
}


