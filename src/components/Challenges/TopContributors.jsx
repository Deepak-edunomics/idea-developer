import React from "react";
import { Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import "../../CSS/index.css";
const top_contributors = [
    {
        image: "https://tinyurl.com/y3o9st92",
        name: "User Name",
    },
    {
        image: "https://tinyurl.com/y3o9st92",
        name: "User Name",
    },
    {
        image: "https://tinyurl.com/y3o9st92",
        name: "User Name",
    },
    {
        image: "https://tinyurl.com/y3o9st92",
        name: "User Name",
    },
];

function TopContributor() {
    return (
        <div>
            <div className="top-contri-head">
                <h5
                    align="center"
                    style={{ color: "#fff", paddingTop: "10px", fontWeight: "bold" }}
                >
                    Top Contributors
        </h5>
            </div>

            <div style={{ marginTop: "20px" }}>
                {top_contributors.map((top) => (
                    <Row className="avtar">
                        <Avatar src={top.image} alt={top.name} />
                        <p className="avtar-name">{top.name}</p>
                    </Row>
                ))}
            </div>
        </div>
    );
}

export default TopContributor;
