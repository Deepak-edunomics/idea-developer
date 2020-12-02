import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';

function CheckBox({ removeOptionHandler, value, setText, setCheckboxHandler}) {
    return (
        <FormGroup>
            <Form.Check type="checkbox" onChange={(e)=>setCheckboxHandler(value.optionId, e.target.checked,"checkbox")}></Form.Check>
            <FormControl
                type="text"
                value={value.value}
                onChange={(e) => setText(e.target.value, value.optionId, "checkbox")}
                placeholder="Name the option"
            />
            <CancelIcon onClick={()=>removeOptionHandler(value.optionId, "checkbox")} />
        </FormGroup>
    );

}


export default CheckBox;