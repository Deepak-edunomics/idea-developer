import React from "react";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";

export default function PipelineHeadBar(props) {
    return (
        <Grid container direction="row" style={{ backgroundColor: "#213e78", borderRadius: "18px" }}>
            <Grid item container xs={9} justify="center"
                alignItems="center" >
                <h5 style={{ color: "#fff", fontWeight: "800", marginBottom: "0" }}>{props.heading}</h5>
            </Grid>
            <Grid item container xs={3} justify="center" alignItems="center">
                <Button>
                    <MoreHorizIcon style={{ color: "#fff" }} />
                </Button>
            </Grid>
        </Grid>
    );
}
