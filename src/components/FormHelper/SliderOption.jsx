import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Grid } from "@material-ui/core";

const demo = [
    {
        minLabel: "Poor",
        maxLabel: "Excellent",
    },
    {
        min: "6",
        max: "9",
    },
];

export default function SliderOption() {
   



    const showSLider = (option) => {
        let content = [];
        for (let i = demo[1].min; i <= demo[1].max; i++) {
            content.push(
                <Grid item xs={0.5}>
                    <Grid container justify="center">
                        <Form.Label>{i}</Form.Label>
                    </Grid>
                    <Grid container justify="center">

                        <Form.Check type="radio" disabled></Form.Check>
                    </Grid>
                </Grid>
            );
        }
        return content;
    };
    return (
        <div>
            <FormGroup>
                <Grid container direction="row">
                    <Grid item container justify="center" xs="1">
                        <Form.Label>{demo[0].minLabel}</Form.Label>
                    </Grid>

                    {showSLider(demo)}

                    <Grid item container justify="center" xs="1">
                        <Form.Label>{demo[0].maxLabel}</Form.Label>
                    </Grid>
                </Grid>
            </FormGroup>
        </div>
    );
}