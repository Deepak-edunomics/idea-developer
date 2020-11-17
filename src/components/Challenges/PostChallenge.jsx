import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Form, FormGroup, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { addChallenge } from '../../redux/actions/userAction'
// local file imports
import "../../CSS/index.css";


const categories = ["Category1", "Category 2"];
const groups = ["user 1", "user 2", "user 3"];
const taglist = ["tag 1", "tag 2", "tag 3"];

function PostChallenge() {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [groupOptions, setGroupOptions] = useState([]);
    const [tags, setTags] = useState([]);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addChallenge({
            title, description, startDate, endDate,
            categories: categoryOptions, groups: groupOptions,
            tags
        }))
        setTimeout(() =>
            handleCloseModal()
            , 300)
    }


    return (
        <div>
            <Button
                startIcon={<AddIcon />}
                variant="contained"
                size="large"
                // className="global-btn"
                onClick={handleShowModal}
            >
                Create Challenge
      </Button>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header className="modal-header">
                    <Modal.Title style={{ textAlign: "center" }}>
                        Post Challenge
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <FormGroup>
                            <Form.Label>Challenge Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Challenge Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>

                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="endDate"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>Select Category</Form.Label>
                                    <Typeahead
                                        id="basic-typeahead-multiple"
                                        // labelKey="category"
                                        multiple
                                        onChange={setCategoryOptions}
                                        options={categories}
                                        placeholder="Choose Categories"
                                        selected={categoryOptions}
                                    />
                                </FormGroup>
                            </Col>

                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Add Challenge Image</Form.File.Label>
                                        <Form.File.Input multiple />
                                    </Form.File>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.Label>Select Groups</Form.Label>
                                    <Typeahead
                                        id="basic-typeahead-multiple"
                                        labelKey="userGroup"
                                        multiple
                                        onChange={setGroupOptions}
                                        options={groups}
                                        placeholder="Select Groups"
                                        selected={groupOptions}
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
                        <FormGroup>
                            <Form.Label>Add Tags</Form.Label>
                            <Typeahead
                                id="basic-typeahead-multiple"
                                labelKey="userGroup"
                                multiple
                                onChange={setTags}
                                options={taglist}
                                placeholder="#tags"
                                selected={tags}
                            />
                        </FormGroup>
                        <Row>
                            <Col sm="12" md="6">
                                <FormGroup>
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Add Attachments</Form.File.Label>
                                        <Form.File.Input multiple />
                                    </Form.File>
                                </FormGroup>
                            </Col>
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

export default PostChallenge;