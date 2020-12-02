import React,{useState, useEffect} from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';

function RadioButton({ removeOptionHandler, value, setText, setRadioCheckedHandler }) {
    return (
        <FormGroup>
            <Form.Check type="radio" checked={value.checked} onChange={(e) => setRadioCheckedHandler(value.optionId, e.target.checked, "radio")}></Form.Check>
            <FormControl
                type="text"
                onChange={(e) => setText(e.target.value, value.optionId, "radio")}
                placeholder="Name the option"
            />
            <CancelIcon onClick={() => removeOptionHandler(value.optionId, "radio")} />
        </FormGroup>
    );

}


export default RadioButton