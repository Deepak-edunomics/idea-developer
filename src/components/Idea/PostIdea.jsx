import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Form, FormGroup, Row, Col} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {addIdea} from '../../redux/actions/userAction'
import "../../CSS/index.css";



// idea form utility
const challengesList = ["Challenges 1", "Challenges 2"];
const benefitCategory = ["finance", "developement", "marketing"];

// main component
function PostIdea() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [ideaTitle, setIdeaTitle] = useState();
    const [ideaDescription, setIdeaDescription] = useState();
    const [challenges, setChallenges] = useState();
    const [benefitOptions, setBenefitOptions] = useState();
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
        setShowModal(true);
    }

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addIdea({
            title:ideaTitle,
            description: ideaDescription,
            challengeLinks: challenges,
            benefitSectors: benefitOptions,
        }))
        setTimeout(() => {
           handleCloseModal()
        },500)

        
        
    }
        
    return (
        <div>
            {/* <Button
                startIcon={<AddIcon />}
                variant="contained"
                size="large"
                className="global-btn"
                onClick={handleShowModal}
            >
                Post Idea 
      </Button> */}
            <Button startIcon={<AddIcon />} variant="contained" size="large" onClick={handleShowModal}>Post Idea</Button>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header className="modal-header">
                    <Modal.Title style={{ textAlign: "center" }}>Post Idea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <FormGroup>
                            <Form.Label>Idea Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="ideaTitle"
                                value={ideaTitle}
                                onChange={(e) => setIdeaTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Idea Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="ideaDescription"
                                value={ideaDescription}
                                onChange={(e) => setIdeaDescription(e.target.value)}
                            />
                        </FormGroup>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>Challenge Link</Form.Label>
                                    <Typeahead
                                        id="basic-typeahead-multiple"
                                        multiple
                                        options={challengesList}
                                        placeholder="Choose Categories"
                                        onChange={setChallenges}
                                        selected={challenges}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Attachments</Form.File.Label>
                                        <Form.File.Input multiple />
                                    </Form.File>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>Benefit Sectors</Form.Label>
                                    <Typeahead
                                        id="basic-typeahead-multiple"
                                        multiple
                                        options={benefitCategory}
                                        placeholder="Benefits..."
                                        onChange={setBenefitOptions}
                                        selected={benefitOptions}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Hide Me"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="6"></Col>
                            <Col sm="12" md="6">
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Button
                                                variant="contained"
                                                className="btn btn-cancel"
                                                onClick={handleCloseModal}
                                            >
                                                Cancel
                      </Button>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Button type="submit" variant="contained" className="btn btn-post">
                                                Post
                      </Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default PostIdea;