import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import RoundIconButton from '../RoundIconButton';

function Votes({setVoteText, removeVote, vote }) {

    return (
        <div className="mt-3 d-flex align-items-center">
            <p className="m-0 mr-2">Minimum number of Votes</p>
            <Form.Control onChange={(e)=>setVoteText(e.target.value, vote.ruleId)} value={vote.value} className="d-inline mr-2" style={{ width: 50 }} type="text" size="sm" />
            <RoundIconButton variant="danger">
                <FaPlus onClick={()=>removeVote(vote.ruleId)} style={{ transform: "rotate(45deg)" }} />
            </RoundIconButton>
        </div>
    )
}

export default Votes
