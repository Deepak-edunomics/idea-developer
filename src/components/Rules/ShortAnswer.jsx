import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel'

const ShortAnswer = ({ setShortAnswer, setShortQuestion, shortAnswer, removeShortAnswer }) => {
    return (
        <>
            <div class="form-group">
                <label for="shortQuestionId">Short Answer</label>
                <input onChange={(e) => setShortQuestion(e.target.value, shortAnswer._id)} type="text" value={shortAnswer.question} class="form-control" id="shortQuestionId" />
            </div>
            <div class="form-group">
                <label for="shortAnswerId">Answer</label>
                <textarea onChange={(e) => setShortAnswer(e.target.value, shortAnswer._id)} type="text" value={shortAnswer.answer} class="form-control" id="shortAnswerId" />
            </div>
            <CancelIcon onClick={() => removeShortAnswer(shortAnswer._id)} />
        </>
    )
}

export default ShortAnswer
