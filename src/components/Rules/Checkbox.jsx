import React, { useEffect, useState } from 'react'
import { Form, Col, Button, FormGroup } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton'

function Checkbox({ data, onChange, onRemove }) {
    const [state, setState] = useState(data);

    useEffect(() => {
        onChange(state);
    }, [state]);

    const addValue = () => {
        setState({ ...state, values: [...state.values, { value: "", done: false }] });
    }

    const setValue = (idx, v) => {
        setState({
            ...state,
            values: state.values.map((value, i) => i !== idx ? value : { ...value, value: v })
        })
    }

    const removeValue = (idx) => {
        setState({ ...state, values: state.values.filter((v, i) => i !== idx) })
    }

    return (
        <div className="mt-3">
            <div className="d-flex w-50 align-items-center">
                <Form.Control className="d-inline mr-2" size="sm" placeholder="Name the rule" type="text" />
                <RoundIconButton variant="danger">
                    <FaPlus onClick={onRemove} style={{ transform: "rotate(45deg)" }} />
                </RoundIconButton>
                <RoundIconButton onClick={addValue} className="ml-2" variant="success">
                    <FaPlus />
                </RoundIconButton>
            </div>
            <div>
                {
                    state.values.map((value, i) => (
                        <div key={i} className="d-flex align-items-center w-25 mt-2">
                            <Form.Check type="checkbox" />
                            <Form.Control className="mr-2" type="text" value={value.value} onChange={e => setValue(i, e.target.value)} placeholder="Please enter value" size="sm" />
                            <RoundIconButton variant="danger">
                                <FaPlus onClick={() => removeValue(i)} style={{ transform: "rotate(45deg)" }} />
                            </RoundIconButton>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Checkbox
