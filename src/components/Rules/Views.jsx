import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton';

function Views({setViewText, removeView, view}) {

    return (
        <div className="mt-3 d-flex align-items-center">
            <p className="m-0 mr-2">Minimum number of views</p>
            <Form.Control onChange={(e)=>setViewText(e.target.value, view._id)} value={view.value} className="d-inline mr-2" style={{ width: 50 }} type="text" size="sm" />
            <RoundIconButton variant="danger">
                <FaPlus onClick={()=>removeView(view._id)} style={{ transform: "rotate(45deg)" }} />
            </RoundIconButton>
        </div>
    )
}

export default Views
