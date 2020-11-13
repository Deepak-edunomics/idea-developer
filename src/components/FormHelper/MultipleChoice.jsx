import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import InputText from "./InputText";
import CancelIcon from '@material-ui/icons/Cancel';


export default function MultipleChoice() {
    return (
        <FormGroup>
            <Form.Check type="radio" disabled></Form.Check>
            <InputText placeholder="Name the option" />
            <CancelIcon />
        </FormGroup>
    );
}