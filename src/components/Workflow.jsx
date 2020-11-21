import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

//REACT-BOOTSTRAP
import { Form } from 'react-bootstrap'

// MATERIAL UI
import CancelIcon from '@material-ui/icons/Cancel'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";

// RULES
import Comments from './Rules/Comments'
import Views from './Rules/Views'
import Collaborators from './Rules/Collaborators'
import Ratings from './Rules/Rating'
import Votes from './Rules/Votes'
import ShortAnswer from '../components/Rules/ShortAnswer'
import LongAnswer from '../components/Rules/LongAnswer'

//FORM_HELPER
import CheckBox from './FormHelper/CheckBox'
import Slider from './FormHelper/Slider'

// ACTION
import { deleteStage } from '../redux/actions/userAction'

const Workflow = ({ stage }) => {
    const [newRules, setNewRules] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()

    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //HANDLERCLICK HANDLER
    const handleClick = (data) => {
        if (data.type === "comment") {
            const tempValue = newRules.find(obj => obj.type === "comment")
            if (!tempValue) {
                setNewRules([...newRules, { type: "comment", _id: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)

        }
        if (data.type === "view") {
            const tempValue = newRules.find(obj => obj.type === "view")
            if (!tempValue) {
                setNewRules([...newRules, { type: "view", _id: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "collaborator") {
            const tempValue = newRules.find(obj => obj.type === "collaborator")
            if (!tempValue) {
                setNewRules([...newRules, { type: "collaborator", _id: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "rating") {
            const tempValue = newRules.find(obj => obj.type === "rating")
            if (!tempValue) {
                setNewRules([...newRules, { type: "rating", _id: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "vote") {
            const tempValue = newRules.find(obj => obj.type === "vote")
            if (!tempValue) {
                setNewRules([...newRules, { type: "vote", _id: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "checkbox") {
            setNewRules([...newRules, { type: "checkbox", _id: uuidv4(), options: [{ value: "", _id: uuidv4() }], value: "" }])
            setAnchorEl(null)
            setAnchorEl(null)
        }
        if (data.type === "slider") {
            setNewRules([...newRules, {
                type: "slider", _id: uuidv4(),
                min: 0, max: 5, minLabel: "", maxLabel: "",
                question: "", value: ""
            }])
            setAnchorEl(null)
        }
        if (data.type === "short-answer") {
            setNewRules([...newRules, { type: "short-answer", _id: uuidv4(), question: "", answer: "" }])
            setAnchorEl(null)
        }
        if (data.type === "long-answer") {
            setNewRules([...newRules, { type: "long-answer", _id: uuidv4(), question: "", answer: "" }])
            setAnchorEl(null)
            setAnchorEl(null)
        }
    }

    //SHORT ANSWER HANDLER
    const setShortAnswer = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, answer: value }])
    }
    const setShortQuestion = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, question: value }])
    }


    //LONG ANSWER HANDLER
    const setLongAnswer = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, answer: value }])
    }
    const setLongQuestion = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, question: value }])
    }


    //TEXT-HANDLER
    const setTextHandler = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, value: value }])
    }

    //REMOVE_RULE_HANDLER
    const removeHandler = (_id) => {
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules])
    }

    //CHECKBOX ADD OPTIONS HANDLER
    const checkboxOptionsHandler = () => {
        const newOption = { value: "", _id: uuidv4() }
        const tempCheckbox = newRules.find(obj => obj.type === "checkbox")
        tempCheckbox.options.push(newOption)
        const filteredRules = newRules.filter(obj => obj.type !== "checkbox")
        setNewRules([...filteredRules, tempCheckbox])
    }

    //CHECKBOX REMOVE OPTIONS HANDLER
    const removeOptionHandler = (_id) => {
        const tempCheckbox = newRules.find(obj => obj.type === "checkbox")
        const updatedOptions = tempCheckbox.options.filter(opt => opt._id !== _id)
        if (updatedOptions) {
            tempCheckbox.options = updatedOptions
            // DRY
            const filteredRules = newRules.filter(obj => obj.type !== "checkbox")
            setNewRules([...filteredRules, tempCheckbox])
        }
    }

    //CHECKBOX OPTION TEXT HANDLER
    const setText = (text, _id) => {
        const newObj = {
            value: text,
            _id
        }
        const tempCheckbox = newRules.find(obj => obj.type === "checkbox")  // Object
        const allOptions = tempCheckbox.options.filter(opt => opt._id !== _id)
        allOptions.push(newObj)
        tempCheckbox.options = allOptions
        const filteredRules = newRules.filter(obj => obj.type !== "checkbox")
        setNewRules([...filteredRules, tempCheckbox])
    }

    //DELETE STAGE HANDLER
    const deleteStageHandler = () => {
        dispatch(deleteStage(stage._id))
    }

    //SLIDER SET QUESTION
    const setSliderQuestion = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, question: value }])
    }

    //SLIDER SET MIN
    const setSliderMin = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, min: value }])
    }

    //SLIDER SET MAX
    const setSliderMax = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, max: value }])
    }

    //SLIDER SET MIN LABEL
    const setSliderMinLabel = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, minLabel: value }])
    }

    //SLIDER SET MAX LABEL
    const setSliderMaxLabel = (value, _id) => {
        const tempValue = newRules.find(obj => obj._id === _id)
        const filteredRules = newRules.filter(obj => obj._id !== _id)
        setNewRules([...filteredRules, { ...tempValue, maxLabel: value }])
    }


    const ruleFormHandler = () => {
        console.log("newRules", newRules)
    }
   
    return (
        <Fragment>
            <div className="mt-3 shadow-sm px-3 py-3 w-100">
                <h3 className="text-success">{stage.stageName}
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick1}
                    >
                        Add Rules <AddIcon />
                    </Button>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        color="secondary"
                        onClick={deleteStageHandler}
                    >
                        Delete
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleClick({ type: 'checkbox' })}>CheckBox</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'short-answer' })}>Short Answer</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'long-answer' })}>Long Answer</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: "comment" })}>Min No of Comments</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'view' })}>Min No of View</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'vote' })}>Min No of votes</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'collaborator' })}>Min No of Collaborators</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'rating' })}>Min No of ratings</MenuItem>
                        <MenuItem onClick={handleClose}>Radio</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'slider' })}>Slider</MenuItem>
                    </Menu>
                </h3>

                {newRules.map(obj => {
                    switch (obj.type) {
                        case "comment":
                            return <Comments setCommentText={setTextHandler}
                                removeComment={removeHandler} comment={obj} />

                        case "view":
                            return <Views setViewText={setTextHandler} removeView={removeHandler} view={obj} />

                        case "collaborator":
                            return <Collaborators setCollaboratorText={setTextHandler}
                                removeCollaborator={removeHandler} collaborator={obj} />

                        case "vote":
                            return <Votes setVoteText={setTextHandler} removeVote={removeHandler} vote={obj} />

                        case "rating":
                            return <Ratings setRatingText={setTextHandler} removeRating={removeHandler}
                                rating={obj} />

                        case "checkbox":
                            return <>
                                <Form.Control onChange={(e) => setTextHandler(e.target.value, obj._id)} value={obj.value} type="text" />
                                {obj.options.map(val =>
                                    <CheckBox removeOptionHandler={removeOptionHandler} setText={setText} value={val} key={val._id} />
                                )}
                                <Button onClick={checkboxOptionsHandler}>Add More Options</Button>
                                <CancelIcon onClick={() => removeHandler(obj._id)} />

                            </>
                        case "short-answer":
                            return <ShortAnswer setShortAnswer={setShortAnswer} setShortQuestion={setShortQuestion}
                                shortAnswer={obj} removeShortAnswer={removeHandler} />

                        case "long-answer":
                            return <LongAnswer setLongAnswer={setLongAnswer} setLongQuestion={setLongQuestion}
                                longAnswer={obj} removeLongAnswer={removeHandler} />
                        case "slider":
                            return <Slider slider={obj} setSliderQuestion={setSliderQuestion}
                                setSliderMax={setSliderMax} setSliderMin={setSliderMin}
                                setSliderMaxLabel={setSliderMaxLabel} setSliderMinLabel={setSliderMinLabel}
                                removeHandler={removeHandler}
                            />
                    }
                })}

                {newRules.length !== 0 ? <button onClick={ruleFormHandler} type="button" className="btn btn-primary">SAVE</button>
                : null}
            </div>
        </Fragment>

    )
}

export default React.memo(Workflow)
