import React from "react";
import { PipelineCard } from "../Utilities/PipelineCard";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Grid from "@material-ui/core/Grid";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import "../../CSS/index.css";
function PipelineIdeaCard(props) {
    return (
        <Grid item container justify="center">
            <PipelineCard title={props.title} />
            <Grid container direction="row" justify="center">
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.comments}</p>
                    </Grid>

                    <Grid container justify="center">
                        <CommentIcon className="comment" />
                    </Grid>
                </Grid>
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.upVote}</p>
                    </Grid>
                    <Grid container justify="center">
                        <ThumbUpIcon className="like" />
                    </Grid>
                </Grid>
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.downVote}</p>
                    </Grid>
                    <Grid container justify="center">
                        <ThumbDownIcon className="downvote" />
                    </Grid>
                </Grid>
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.effort}</p>
                    </Grid>

                    <Grid container justify="center">
                        <QueryBuilderIcon className="ideas" />
                    </Grid>
                </Grid>

                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.impact}</p>
                    </Grid>
                    <Grid container justify="center">
                        <MonetizationOnIcon className="rating" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PipelineIdeaCard;
