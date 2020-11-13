import React from 'react';
import InputText from './InputText';
import { FormGroup, Form } from 'react-bootstrap';
export default function Slider() {

    return (
        <div>
            <FormGroup >

                <Form.Control as="select">
                    <option>0</option>
                    <option>1</option>

                </Form.Control>
            </FormGroup>
            <p>to</p>
            <FormGroup >
                <Form.Control as="select">
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Form.Control>
            </FormGroup>
            <InputText placeholder="Low label" />
            <InputText placeholder="High label"></InputText>
        </div>
    );
}