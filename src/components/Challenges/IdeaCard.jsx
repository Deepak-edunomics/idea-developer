import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Row } from "react-bootstrap";
import { CommentData } from "../Utilities/CommentData";
import Comment from "../Utilities/Comment";
import "../../CSS/index.css";
const ideas = [
    {
        title: "Idea Title Here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
        upVote: "12",
        downVote: "8",
        comments: [],
        effortRating: "4.7",
        impactRating: "3.5",
    },
    {
        title: "Idea Title Here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
        upVote: "12",
        downVote: "8",
        comments: [],
        effortRating: "4.7",
        impactRating: "3.5",
    },
    {
        title: "Idea Title Here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
        upVote: "12",
        downVote: "8",
        comments: [],
        effortRating: "4.7",
        impactRating: "3.5",
    },
    {
        title: "Idea Title Here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
        upVote: "12",
        downVote: "8",
        comments: [],
        effortRating: "4.7",
        impactRating: "3.5",
    },
];
const useStyles = makeStyles({
    root: {
        width: 150,
    },
});

function valuetext(value) {
    return `${value}`;
}
function IdeaCard() {
    const classes = useStyles();
    const [impact, setImpact] = React.useState(false);
    const [effort, setEffort] = React.useState(false);
    const [downVote, setDownVote] = React.useState(false);
    const [upVote, setUpVote] = React.useState(false);
    const [ShowComments, setShowComments] = React.useState(false);

    const handleShowComments = () => {
        setShowComments(!ShowComments);
    };
    const handleUpVote = () => { };
    const handleDownVote = () => { };

    const handleIdeaFollower = () => { };
    const handleChangeImpact = () => {
        setImpact((prev) => !prev);
    };
    const handleChangeEffort = () => {
        setEffort((prev) => !prev);
    };
    return (
        <div>
            {ideas.map((idea) => (
                <div style={{ padding: "15px", marginBottom: "20px" }}>
                    <h5>{idea.title}</h5>
                    <p>{idea.description}</p>
                    <Row>
                        <div>
                            <Button onCLick={handleUpVote}>
                                {idea.upVote}
                                <ThumbUpIcon
                                    style={upVote ? { color: "blue" } : { color: "grey" }}
                                />
                            </Button>
                            <Button onClick={handleDownVote}>
                                {idea.downVote}
                                <ThumbDownIcon
                                    style={downVote ? { color: "red" } : { color: "grey" }}
                                />
                            </Button>

                            <span>
                                <Button
                                    size="small"
                                    id="discrete-slider"
                                    checked={impact}
                                    onClick={handleChangeImpact}
                                >
                                    Impact {idea.impactRating}
                                </Button>
                            </span>

                            <span>
                                <Button
                                    size="small"
                                    id="discrete-slider"
                                    checked={effort}
                                    onClick={handleChangeEffort}
                                >
                                    Effort {idea.effortRating}
                                </Button>
                            </span>
                            <span>
                                <Button>
                                    <PersonAddIcon onCLick={handleIdeaFollower} />
                                </Button>
                            </span>
                            <span>
                                <Button onClick={handleShowComments}>34 Comments</Button>
                            </span>
                            <div className={classes.root}>
                                <Collapse in={impact}>
                                    <Slider
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={0.5}
                                        marks
                                        min={0.0}
                                        max={5.0}
                                    />
                                </Collapse>
                            </div>
                            <div className={classes.root}>
                                <Collapse in={effort}>
                                    <Slider
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={0.5}
                                        marks
                                        min={0.0}
                                        max={5.0}
                                    />
                                </Collapse>
                            </div>
                            <div className="challenge-comment-section" >
                                {ShowComments && <Comment CommentList={CommentData} />}
                            </div>
                        </div>
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default IdeaCard;
