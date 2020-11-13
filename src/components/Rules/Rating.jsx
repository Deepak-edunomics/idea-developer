import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton';

function Rating({ data, onChange, onRemove }) {
    const [state, setState] = useState(data);

    // useEffect(() => {
    //     onChange(state)
    // }, [state]);

    return (
        <div className="mt-3 d-flex align-items-center">
            <p className="m-0 mr-2">Minimum number of Rating</p>
            <Form.Control className="d-inline mr-2" style={{ width: 50 }} type="text" size="sm" />
            <RoundIconButton variant="danger">
                <FaPlus onClick={onRemove} style={{ transform: "rotate(45deg)" }} />
            </RoundIconButton>
        </div>
    )
}

export default Rating
