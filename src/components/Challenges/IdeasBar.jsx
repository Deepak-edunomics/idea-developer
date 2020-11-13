import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IdeaCard from "./IdeaCard";
import "../../CSS/index.css";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

function IdeasBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="sticky" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    className="idea-bar-nav"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="All Ideas" className="btn-ideas-bar " {...a11yProps(0)} />
                    <Tab label="Top 10" className="btn-ideas-bar " {...a11yProps(1)} />
                    <Tab label="Recent" className="btn-ideas-bar " {...a11yProps(2)} />
                    <Tab
                        label="Most Upvoted"
                        className="btn-ideas-bar"
                        {...a11yProps(3)}
                    />
                    <Tab
                        label="Most Downvoted"
                        className="btn-ideas-bar"
                        {...a11yProps(4)}
                    />
                    <Tab
                        label="Highest Rating on Effort"
                        className="btn-ideas-bar"
                        {...a11yProps(5)}
                    />
                    <Tab
                        label="Highest Rating on Impact"
                        className="btn-ideas-bar"
                        {...a11yProps(6)}
                    />
                    <Tab
                        label="Most Followed"
                        className="btn-ideas-bar"
                        {...a11yProps(7)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} children={<IdeaCard />}></TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
      </TabPanel>
        </div>
    );
}

export default IdeasBar;
