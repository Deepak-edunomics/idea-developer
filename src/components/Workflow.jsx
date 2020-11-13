import React, { useState, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Comments from './Rules/Comments'
import Views from './Rules/Views'
import Collaborators from './Rules/Collaborators'
import Ratings from './Rules/Rating'
import Votes from './Rules/Votes'

//Ayush
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";



//
import InputText from './FormHelper/InputText'
import CheckBox from './FormHelper/CheckBox'
import Slider from './FormHelper/Slider'


const Workflow = ({stage}) => {
    const [rules, setRules] = useState({
        comments: { add: false, value: "" },
        views: { add: false, value: "" },
        collaborators: { add: false, value: "" },
        ratings: { add: false, value: "" },
        votes: { add: false, value: "" },
        checkbox: { add: false, options: [{ value: "", _id: uuidv4() }], question: "", answer: "", point: "" },
        slider: { add: false, value: "" },
    })

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (data) => {
        if (data.type === "comments") {
            setRules({ ...rules, comments: { ...rules.comments, add: true } })
            setAnchorEl(null)
        }
        if (data.type === "views") {
            setRules({ ...rules, views: { ...rules.views, add: true }})
            setAnchorEl(null)
        }
        if (data.type === "collaborators") {
            setRules({ ...rules, collaborators: { ...rules.collaborators, add: true }})
            setAnchorEl(null)
        }
        if (data.type === "ratings") {
            setRules({ ...rules, ratings: { ...rules.ratings, add: true }})
            setAnchorEl(null)
        }
        if (data.type === "votes") {
            setRules({ ...rules, votes: { ...rules.votes, add: true }})
            setAnchorEl(null)
        }
        if (data.type === "checkbox") {
            setRules({ ...rules, checkbox: { ...rules.checkbox, add: true }})
            setAnchorEl(null)
        }
        if (data.type === "slider") {
            setRules({ ...rules, slider: { ...rules.slider, add: true } })
            setAnchorEl(null)
        }
        

    }

    const checkboxOptionsHandler = () => {
        const newOption = { value: "", _id: uuidv4() }
        setRules({
            ...rules,
            checkbox:{...rules.checkbox, options: [newOption, ...rules.checkbox.options]}
        })
    }

    const removeOptionHandler = (_id) => {
        const updatedOptions = rules.checkbox.options.filter(opt => opt._id !== _id)
        if (updatedOptions) {
            setRules({ ...rules, checkbox: { ...rules.checkbox, options: updatedOptions } })
        }
    }

    const setText = (text, _id) => {
        const newObj = {
            value: text,
            _id
        }
        const particularOption = rules.checkbox.options.filter(opt => opt._id !== _id)
        setRules({ ...rules, checkbox: { ...rules.checkbox, options: [...particularOption, newObj] } })
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
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleClick({ type: 'checkbox', values: 0 })}>CheckBox</MenuItem>
                        <MenuItem onClick={handleClose}>Radio</MenuItem>
                        <MenuItem onClick={handleClose}>Short Answer</MenuItem>
                        <MenuItem onClick={handleClose}>Long Answer</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'slider', values: 0 })}>Slider</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'comments', values: 0 })}>Min No of Comments</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'views', values: 0 })}>Min No of View</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'votes', values: 0 })}>Min No of votes</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'collaborators', values: 0 })}>Min No of Collaborators</MenuItem>
                        <MenuItem onClick={() => handleClick({ type: 'ratings', values: 0 })}>Min No of ratings</MenuItem>
                    </Menu>
                </h3>
              
                {console.log("rukes",rules)}
                    {rules.comments.add ? <Comments /> : null}
                    {rules.views.add ? <Views /> : null}
                    {rules.collaborators.add && <Collaborators />}
                    {rules.votes.add && <Votes />}
                    {rules.ratings.add && <Ratings />}
                     {rules.checkbox.add && <>
                    <InputText />
                    {rules.checkbox.options.map((val, index) =>
                        <CheckBox removeOptionHandler={removeOptionHandler} setText={setText} value={val} key={val._id}/>
                        )}
                    <Button onClick={checkboxOptionsHandler}>Add More Options</Button>
                </>}
                {rules.slider.add && <Slider />}
                
               
            </div>
        </Fragment>
       
    )
}

export default React.memo(Workflow)
