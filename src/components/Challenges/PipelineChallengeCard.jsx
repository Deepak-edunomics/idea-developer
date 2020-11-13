import React from "react";
import PipelineCard from "../Utilities/PipelineCard";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import "../../CSS/index.css";


export default function PipelineChallengeCard(props) {
    return (
        <Grid item container justify="center">
            <PipelineCard title={props.title} />
            <Grid container direction="row" justify="center">
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.views}</p>
                    </Grid>
                    <Grid container justify="center">
                        <VisibilityIcon className="views" />
                    </Grid>
                </Grid>
                <Grid item xs="2">
                    <Grid container justify="center">

                        <p className="margin-bottom-zero">{props.ideas}</p>
                    </Grid>

                    <Grid container justify="center">
                        <EmojiObjectsIcon className="ideas" />
                    </Grid>
                </Grid>
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
                        <p className="margin-bottom-zero">{props.like}</p>
                    </Grid>
                    <Grid container justify="center">
                        <ThumbUpIcon className="like" />
                    </Grid>
                </Grid>
                <Grid item xs="2">
                    <Grid container justify="center">
                        <p className="margin-bottom-zero">{props.rating}</p>
                    </Grid>
                    <Grid container justify="center">
                        <StarIcon className="rating" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
