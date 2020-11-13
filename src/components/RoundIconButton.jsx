import React from 'react'
import { Button } from 'react-bootstrap';


function RoundIconButton({ children, className, ...rest }) {
    return (
        <Button className={"rounded-circle p-1 " + (className ? className : "")} style={{ height: 25, width: 25, lineHeight: "10px" }} size="sm" {...rest}>
            {children}
        </Button>
    )
}

export default RoundIconButton