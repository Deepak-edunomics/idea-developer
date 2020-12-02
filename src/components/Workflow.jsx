import React, { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {addRule, getRules} from '../redux/actions/userAction'

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

//FORM_HELPER
import CheckBox from './FormHelper/CheckBox'
import RadioButton from './FormHelper/RadioButton'
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
                setNewRules([...newRules, { type: "comment", ruleId: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)

        }
        if (data.type === "view") {
            const tempValue = newRules.find(obj => obj.type === "view")
            if (!tempValue) {
                setNewRules([...newRules, { type: "view", ruleId: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "collaborator") {
            const tempValue = newRules.find(obj => obj.type === "collaborator")
            if (!tempValue) {
                setNewRules([...newRules, { type: "collaborator", ruleId: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "rating") {
            const tempValue = newRules.find(obj => obj.type === "rating")
            if (!tempValue) {
                setNewRules([...newRules, { type: "rating", ruleId: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "vote") {
            const tempValue = newRules.find(obj => obj.type === "vote")
            if (!tempValue) {
                setNewRules([...newRules, { type: "vote", ruleId: uuidv4(), value: "" }])
                setAnchorEl(null)
            }
            setAnchorEl(null)
        }
        if (data.type === "checkbox") {
            setNewRules([...newRules, { type: "checkbox", ruleId: uuidv4(), options: [{ value: "", optionId: uuidv4(), checked: false }], points: "", value: "" }])
            setAnchorEl(null)
        }
        if (data.type === "slider") {
            setNewRules([...newRules, {
                type: "slider", ruleId: uuidv4(),
                min: 0, max: 5, minLabel: "", maxLabel: "",
                value: "", points: ""
            }])
            setAnchorEl(null)
        }
        
        if (data.type === "radio") {
            setNewRules([...newRules, { type: "radio", ruleId: uuidv4(), options: [{ value: "", optionId: uuidv4(), checked: false }], value: "" }])
            setAnchorEl(null)
        }
    }

    //DELETE STAGE HANDLER
    const deleteStageHandler = () => {
        dispatch(deleteStage(stage._id))
    }

    //TEXT-HANDLER
    const setTextHandler = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, value: value }])
    }

    //POINT-HANDLER
    const setPointsHandler = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, points: value }])
    }

    //REMOVE_RULE_HANDLER
    const removeHandler = (ruleId) => {
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules])
    }


    //REMOVE_OPTION_HANDLER
    const removeOptionHandler = (optionId, type) => {
        const tempRule = newRules.find(obj => obj.type === type)
        if (tempRule.options) {
            const updatedOptions = tempRule.options.filter(opt => opt.optionId !== optionId)
            if (updatedOptions) {
                tempRule.options = updatedOptions
                const filteredRules = newRules.filter(obj => obj.type !== type)
                setNewRules([...filteredRules, tempRule])
            }
        }
    }

    // ADD OPTION HANDLER
    const addOptionHandler = (type) => {
        const newOption = { value: "", optionId: uuidv4(), checked: false }
        const tempRule = newRules.find(obj => obj.type === type)
        tempRule.options.push(newOption)
        const filteredRules = newRules.filter(obj => obj.type !== type)
        setNewRules([...filteredRules, tempRule])
    }

    //CHECKBOX HANDLER 
    const setCheckboxHandler = (optionId, value, type) => {
        const tempRule = newRules.find(obj => obj.type === type)
        const particularOption = tempRule.options.find(obj => obj.optionId === optionId)
        const index = tempRule.options.findIndex(obj => obj.optionId === optionId)
        if (index !== -1) {
            tempRule.options.splice(index,1,{checked:value, optionId, value: particularOption.value })
        }
        const filteredRules = newRules.filter(obj => obj.type !== type)
        setNewRules([...filteredRules, tempRule])
    }

    const setRadioCheckedHandler = (optionId, value, type) => {
        const tempRule = newRules.find(obj => obj.type === type)
        const particularOption = tempRule.options.find(obj => obj.optionId === optionId)
        const index = tempRule.options.findIndex(obj => obj.optionId === optionId)
        if (index !== -1) {
            tempRule.options.splice(index, 1, { checked: value, optionId, value: particularOption.value })
        }
        for (var i = 0; i < tempRule.options.length; i++) {
            if (tempRule.options[i].optionId !== optionId) {
                tempRule.options[i].checked = false
            }
        }
        const filteredRules = newRules.filter(obj => obj.type !== type)
        setNewRules([...filteredRules, tempRule])
    }


    //OPTION TEXT HANDLER
    const setText = (text, optionId, type) => {
        const tempRule = newRules.find(obj => obj.type === type)
        const index = tempRule.options.findIndex(obj => obj.optionId === optionId)
        if (index !== -1) {
            tempRule.options.splice(index,1,{value: text, optionId,checked: false})
        }
        const filteredRules = newRules.filter(obj => obj.type !== type)
        setNewRules([...filteredRules, tempRule])
    }


    //SLIDER SET MIN
    const setSliderMin = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, min: value }])
    }

    //SLIDER SET MAX
    const setSliderMax = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, max: value }])
    }

    //SLIDER SET MIN LABEL
    const setSliderMinLabel = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, minLabel: value }])
    }

    //SLIDER SET MAX LABEL
    const setSliderMaxLabel = (value, ruleId) => {
        const tempValue = newRules.find(obj => obj.ruleId === ruleId)
        const filteredRules = newRules.filter(obj => obj.ruleId !== ruleId)
        setNewRules([...filteredRules, { ...tempValue, maxLabel: value }])
    }

    const ruleFormHandler = () => {
        dispatch(addRule(stage._id, { stageName: stage.stageName, rules: newRules }))
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
                        <MenuItem onClick={() => handleClick({ type: "comment" })}>Min No of Comments</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'view' })}>Min No of View</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'vote' })}>Min No of votes</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'collaborator' })}>Min No of Collaborators</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'rating' })}>Min No of ratings</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'radio' })}>Radio</MenuItem>
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
                                <h6>Checkbox</h6>
                                <Form.Control placeholder="Question..." onChange={(e) => setTextHandler(e.target.value, obj.ruleId)} value={obj.value} type="text" />
                                {obj.options.map(val =>
                                    <CheckBox removeOptionHandler={removeOptionHandler}
                                        setCheckboxHandler={setCheckboxHandler} setText={setText} value={val} key={val.ruleId} />
                                )}
                                <Button onClick={() => addOptionHandler("checkbox")}>Add More Options</Button>
                                <Form.Control size="sm" placeholder="Points..." onChange={(e) => setPointsHandler(e.target.value, obj.ruleId)} value={obj.points} type="text" />

                                <CancelIcon onClick={() => removeHandler(obj.ruleId)} />
                            </>
                        case "slider":
                            return <Slider slider={obj} setSliderQuestion={setTextHandler}
                                setSliderMax={setSliderMax} setSliderMin={setSliderMin}
                                setSliderMaxLabel={setSliderMaxLabel} setSliderMinLabel={setSliderMinLabel}
                                removeHandler={removeHandler} setPointsHandler={setPointsHandler}
                            />
                        case "radio":
                            return <>
                                <h6>Radio</h6>
                                <Form.Control placeholder="Question..." onChange={(e) => setTextHandler(e.target.value, obj.ruleId)} value={obj.value} type="text" />
                                {obj.options.map(val =>
                                    <RadioButton removeOptionHandler={removeOptionHandler}
                                        setRadioCheckedHandler={setRadioCheckedHandler} setText={setText} value={val} key={val.ruleId} />
                                )}
                                <Button onClick={() => addOptionHandler("radio")}>Add More Options</Button>
                                <Form.Control size="sm" placeholder="Points..." onChange={(e) => setPointsHandler(e.target.value, obj.ruleId)} value={obj.points} type="text" />
                                <CancelIcon onClick={() => removeHandler(obj.ruleId)} />
                            </>
                    }
                })}

                {newRules.length !== 0 ? <button onClick={ruleFormHandler} type="button" className="btn btn-primary">SAVE</button>
                    : null}
            </div>
        </Fragment>

    )
}

export default Workflow
