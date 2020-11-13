import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PipelineHeadBar from "../components/Utilities/PipelineHeadBar";
import PipelineCard from "../components/Utilities/PipelineCard";
import PipelineIdeaCard from "../components/Idea/PipelineIdeaCard";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const ideaPreData = [
    {
        title: "Idea Title 1",
    },
    {
        title: "Idea Title 1",
    },
    {
        title: "Idea Title 1",
    },
];

const ideaPostData = [
    {
        title: "Idea Title 1",
        comments: "100",
        upVote: "270",
        downVote: "120",
        effort: "4.7",
        impact: "4.2",
    },
    {
        title: "Idea Title 1",
        comments: "100",
        upVote: "270",
        downVote: "120",
        effort: "4.7",
        impact: "4.2",
    },
    {
        title: "Idea Title 1",
        comments: "100",
        upVote: "270",
        downVote: "120",
        effort: "4.7",
        impact: "4.2",
    },
];
function IdeaPipeline() {
    const classes = useStyles();

    return (
        <div className="pipeline">
            <h3>Challenge Pipeline</h3>
            <Grid container className={classes.root} spacing={1} row>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    md={3}
                    justify="center"
                    spacing={3}
                    className="pipeline-streams"
                >
                    <PipelineHeadBar heading="Submitted" />
                    {ideaPreData &&
                        ideaPreData.map((idea) => (
                            <div className="pipeline-cards">
                                <PipelineCard title={idea.title} />
                            </div>
                        ))}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    md={3}
                    justify="center"
                    spacing={3}
                    className="pipeline-streams"
                >
                    <PipelineHeadBar heading="In Review" />
                    {ideaPreData &&
                        ideaPreData.map((idea) => (
                            <div className="pipeline-cards">
                                <PipelineCard title={idea.title} />
                            </div>
                        ))}
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    md={3}
                    justify="center"
                    spacing={3}
                    className="pipeline-streams"
                >
                    <PipelineHeadBar heading="In Voting" />
                    {ideaPostData &&
                        ideaPostData.map((ideapost) => (
                            <div className="pipeline-cards">
                                <PipelineIdeaCard
                                    title={ideapost.title}
                                    comments={ideapost.comments}
                                    upVote={ideapost.upVote}
                                    downVote={ideapost.downVote}
                                    effort={ideapost.effort}
                                    impact={ideapost.impact}
                                />
                            </div>
                        ))}
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    md={3}
                    justify="center"
                    spacing={3}
                    className="pipeline-streams"
                >
                    <PipelineHeadBar heading="In Selection" />
                    {ideaPostData &&
                        ideaPostData.map((ideapost) => (
                            <div className="pipeline-cards">
                                <PipelineIdeaCard
                                    title={ideapost.title}
                                    comments={ideapost.comments}
                                    upVote={ideapost.upVote}
                                    downVote={ideapost.downVote}
                                    effort={ideapost.effort}
                                    impact={ideapost.impact}
                                />
                            </div>
                        ))}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    md={3}
                    justify="center"
                    spacing={3}
                    className="pipeline-streams"
                >
                    <PipelineHeadBar heading="In Execution" />
                    {ideaPostData &&
                        ideaPostData.map((ideapost) => (
                            <div className="pipeline-cards">
                                <PipelineIdeaCard
                                    title={ideapost.title}
                                    comments={ideapost.comments}
                                    upVote={ideapost.upVote}
                                    downVote={ideapost.downVote}
                                    effort={ideapost.effort}
                                    impact={ideapost.impact}
                                />
                            </div>
                        ))}
                </Grid>
            </Grid>
        </div>
    );
}

export default IdeaPipeline;
