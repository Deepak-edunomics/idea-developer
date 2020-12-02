import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton';

function Collaborators({ setCollaboratorText, removeCollaborator, collaborator }) {
    
    return (
        <div className="mt-3 d-flex align-items-center">
            <p className="m-0 mr-2">Minimum number of Collaborators</p>
            <Form.Control onChange={(e)=>setCollaboratorText(e.target.value, collaborator.ruleId)} value={collaborator.value} className="d-inline mr-2" style={{ width: 50 }} type="text" size="sm" />
            <RoundIconButton variant="danger">
                <FaPlus onClick={()=>removeCollaborator(collaborator.ruleId)} style={{ transform: "rotate(45deg)" }} />
            </RoundIconButton>
        </div>
    )
}

export default Collaborators
