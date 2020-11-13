import React, { useState } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import { Modal } from 'react-bootstrap'
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        flexGrow: 1,
        margin: "auto",
    },
    img: {
        height: 100,
        display: "block",
        maxWidth: 200,
        overflow: "hidden",
        width: "100%",
    },
}));
const useStyles1 = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        flexGrow: 1,
        margin: "auto",
    },
    img: {
        height: 400,
        display: "block",
        maxWidth: 700,
        margin: "auto",
        overflow: "hidden",
        width: "auto",
    },
}));
function ChallengeImage(props) {
    const classes = useStyles();
    const classes1 = useStyles1();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = tutorialSteps.length;
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <div>
            <div className={classes.root}>
                {/* <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img
                                    onClick={handleShowModal}
                                    className={classes.img}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews> */}
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="dots"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            style={{ outline: "none" }}
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                    <KeyboardArrowRight />
                                )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            style={{ outline: "none" }}
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                    <KeyboardArrowLeft />
                                )}
                        </Button>
                    }
                />
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    <div className={classes1.root}>
                        {/* <AutoPlaySwipeableViews
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img
                                            onClick={handleShowModal}
                                            className={classes1.img}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews> */}
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="dots"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    style={{ outline: "none" }}
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    {theme.direction === "rtl" ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                            <KeyboardArrowRight />
                                        )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    style={{ outline: "none" }}
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                >
                                    {theme.direction === "rtl" ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                </Button>
                            }
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ChallengeImage;
