import { React, useState, Fragment } from 'react';
import "../../CSS/index.css"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';
import Button from "@material-ui/core/Button";
import SingleComment from "./SingleComment";




function Comment(props) {
    const [comment, setComment] = useState("")
    const handleChange = (event) => {
        setComment(event.currentTarget.value);
    }

    return (
        <div>

            <div className="challenge-comments">
                {props.CommentList && props.CommentList.map((comment, index) => (
                    (
                        <Fragment>
                            <SingleComment Comment={comment} />
                            {comment.replies && comment.replies.map((rep) => (
                                <SingleComment Comment={rep} />
                            ))}
                        </Fragment>
                    )// end of outer return
                ))}

            </div>

            <form style={{ display: "flex" }} noValidate autoComplete="off" onSubmit>
                <TextareaAutosize onChange={handleChange} value={comment} rowsMin={2} placeholder="Minimum 3 rows" style={{ width: "50%" }} />
                <Button style={{ width: "10%", height: "35px", padding: "0" }}>
                    <SendIcon color="primary" />
                </Button>
            </form>
        </div>
    );;
}


export default Comment;