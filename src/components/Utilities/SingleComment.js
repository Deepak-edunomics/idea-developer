import  React,{ useState } from "react";
import { Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

function SingleComment(props) {
    const [OpenReply, setOpenReply] = useState(false);
    const [CommentValue, setCommentValue] = useState("");

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value);
    };
    const openReply = () => {
        setOpenReply(!OpenReply);
    };

    return (
        <div>
            <Row>
                <Avatar src={props.Comment.avatar_img}></Avatar>
                <div style={{ marginLeft: "25px" }}>
                    <Row>
                        <p>{props.Comment.by}</p>

                        <MoreHorizIcon align="right" style={{ marginLeft: "20px" }} />

                    </Row>

                    <p>{props.Comment.comment}</p>
                    <p>
                        <span onClick={openReply} style={{ marginLeft: "20px" }}>Reply</span>
                        <span style={{ marginLeft: "20px" }}>{props.Comment.time}</span>
                    </p>
                </div>
            </Row>
            {OpenReply && (
                <Row>
                    <form noValidate autoComplete="off" style={{ display: "flex" }} onSubmit>
                        <TextareaAutosize
                            onChange={handleChange}
                            value={CommentValue}
                            rowsMin={1}
                            placeholder="reply here"
                            style={{ width: "100%", marginLeft: "45px" }}
                        />
                        <Button
                            style={{ width: "10%", height: "35px", padding: "0" }}
                            onClick
                        >
                            <SendIcon color="primary" />
                        </Button>
                    </form>
                </Row>
            )}
        </div>
    );
}

export default SingleComment;
