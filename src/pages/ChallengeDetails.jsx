import  React, {useState } from "react";
import TopContributors from "../components/Challenges/TopContributors";
import { Row, Col } from "react-bootstrap";
import IdeasBar from "../components/Challenges/IdeasBar";
import PostIdea from "../components/Idea/PostIdea";
import Comment from "../components/Utilities/Comment";
import { CommentData } from "../components/Utilities/CommentData";
import ChallengeImage from "../components/Challenges/ChallengeImage";
import Button from "@material-ui/core/Button";
import "../CSS/index.css";

function ChallengeDetails() {
    const [ShowComments, setShowComments] = useState(false);
    const handleShowComments = () => {
        setShowComments(!ShowComments);
    };

    return (
        <div className="challenge-details">
            <h4 align="left">Challenge Title</h4>
            <Row style={{ marginBottom: "35px" }}>
                <Col lg="9" md="9" sm="12">
                    <div>
                        <h5>Description</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat
                            nam at lectus urna duis convallis. Donec et odio pellentesque diam
                            volutpat commodo sed egestas egestas. Dui nunc mattis enim ut
                            tellus elementum sagittis. Sodales neque sodales ut etiam sit amet
                            nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut.
                            Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue
                            mauris augue neque gravida in. Egestas fringilla phasellus
                            faucibus scelerisque eleifend donec pretium vulputate. Non enim
                            praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut
                            tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar
                            proin. Scelerisque purus semper eget duis.
            </p>
                    </div>
                    <div>
                        <span className="description-footer">123 Ideas</span>
                        <span className="description-footer" >
                            <Button onClick={handleShowComments}>34 Comments</Button>
                        </span>
                        <span className="description-footer">5 Active users</span>
                        <span className="description-footer">200 Votes</span>
                        <span className="description-footer">200 Views</span>
                    </div>
                    <div className="challenge-comment-section" >
                        {ShowComments && <Comment CommentList={CommentData} />}
                    </div>

                </Col>
                <Col lg="3" md="3" sm="12">
                    <ChallengeImage />
                    <div>
                        <br />
                        <h5>Attachments here</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="9" md="9" sm="12">
                    <IdeasBar />
                </Col>
                <Col lg="3" md="3" sm="12">
                    <TopContributors />
                    <PostIdea />
                </Col>
            </Row>
        </div>
    );
}

export default ChallengeDetails;
