import React from 'react'
import {Form} from 'react-bootstrap'

const Group = (props) => {
    return (<tr>
        <td>{props.index}</td>
        <td className="text-center">
            {props.employee.firstName}
        </td>
        <td className="text-center">
            {props.employee.lastName}
        </td>
        <td className="text-center">
            {props.employee.email}
        </td>
        <td className="text-center">
            {props.employee.role}
        </td>
        <td className="text-center">
            <Form.Check value={props.employee._id} onChange={props.handleInputChange} type="checkbox" />
        </td>
    </tr>
        
    )
}

export default Group
