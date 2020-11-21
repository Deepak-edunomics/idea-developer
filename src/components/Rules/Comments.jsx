import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton';

function Comments({setCommentText, removeComment, comment}) {
    return (
        <div className="mt-3 d-flex align-items-center">
            <p className="m-0 mr-2">Minimum number of Comments</p>
            <Form.Control onChange={(e)=>setCommentText(e.target.value,comment._id)} value={comment.value} className="d-inline mr-2" style={{ width: 50 }} type="text" size="sm" />
            <RoundIconButton variant="danger">
                <FaPlus onClick={()=>removeComment(comment._id)} style={{ transform: "rotate(45deg)" }} />
            </RoundIconButton>
        </div>
    )
}

export default Comments
