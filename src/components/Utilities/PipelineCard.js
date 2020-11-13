import React from "react";
import Grid from "@material-ui/core/Grid";

export default function PipelineCard(props) {
    return (
        <Grid item container justify="center" >
            <h5>{props.title}</h5>
        </Grid>


    );
}