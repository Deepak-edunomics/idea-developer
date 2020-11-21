import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel'

const LongAnswer = ({setLongAnswer, setLongQuestion, longAnswer, removeLongAnswer}) => {
    return ( 
        <>
            <div class="form-group">
                <label for="longQuestionId">Long Answer</label>
                <input onChange={(e)=>setLongQuestion(e.target.value, longAnswer._id)} type="text" value={longAnswer.question} class="form-control" id="longQuestionId" />
            </div>
            <div class="form-group">
                <label for="longAnswerId">Answer</label>
                <textarea onChange={(e)=>setLongAnswer(e.target.value, longAnswer._id)} type="text" value={longAnswer.answer} class="form-control" id="longAnswerId"/>
            </div>
            <CancelIcon onClick={() => removeLongAnswer(longAnswer._id)} />
        </>
    )
}

export default LongAnswer
