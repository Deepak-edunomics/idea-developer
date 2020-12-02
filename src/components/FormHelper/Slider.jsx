import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { FormGroup, Form, FormControl } from 'react-bootstrap';


export default function Slider({ setSliderMax, setSliderMin, setSliderQuestion,
    setSliderMaxLabel, setSliderMinLabel, slider, removeHandler, setPointsHandler }) {
    return (
        <div>
            <FormControl onChange={(e)=>setSliderQuestion(e.target.value, slider.ruleId)} type="text" placeholder="Type your question here" />
            <FormGroup >
                <Form.Control onChange={(e)=>setSliderMin(e.target.value, slider.ruleId)} value={slider.min} as="select">
                    <option>0</option>
                    <option>1</option>
                </Form.Control>
            </FormGroup>
            <p>to</p>
            <FormGroup >
                <Form.Control onChange={(e)=>setSliderMax(e.target.value, slider.ruleId)} value={slider.max} as="select">
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
            <p>{slider.min }</p>
            <FormControl onChange={(e) => setSliderMinLabel(e.target.value, slider.ruleId)} value={slider.minLabel} type="text" placeholder="Label" />
            <p>{slider.max }</p>
            <FormControl onChange={(e) => setSliderMaxLabel(e.target.value, slider.ruleId)} value={slider.maxLabel} type="text" placeholder="Label" />
            <FormControl className="my-3" onChange={(e)=> setPointsHandler(e.target.value, slider.ruleId)} value={slider.points} type="number" placeholder="Points..." sixe="sm" />
            <CancelIcon onClick={() => removeHandler(slider.ruleId)} />
        </div>
    );
}