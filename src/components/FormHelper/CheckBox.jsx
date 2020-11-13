import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import InputText from './InputText';
import CancelIcon from '@material-ui/icons/Cancel';

function CheckBox({ removeOptionHandler, value, setText }) {
    
    return (
        <FormGroup>
            <Form.Check type="checkbox" disabled></Form.Check>
            <FormControl
                type="text"
                value={value.value}
                onChange={(e) => setText(e.target.value, value._id)}
                placeholder="Name the option"
            />
            <CancelIcon onClick={()=>removeOptionHandler(value._id)} />
        </FormGroup>
    );

}


export default CheckBox;