import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Modal, Button, Form, FormGroup } from 'react-bootstrap'

import SideNav from '../../components/SideNav'
import Employee from '../../components/Employee'
import { getEmployees } from '../../redux/actions/userAction'





const AdminDashboard = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (userData.employees.length === 0) {
            dispatch(getEmployees())
        }
    }, [])

    return (
        <>
            
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <SideNav />

                    </div>
                    <div className="col-md-10">
                        <div class="row">
                            <div className="col-3 m-auto">
                                <h1 className="display-4">Employee</h1>
                            </div>
                            <div className="col-7">
                            </div>
                            <div className="col-2 m-auto">
                                <button className="btn btn-primary" data-toggle="modal" data-target="#addEmployeeModal">Add Employee</button>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-10">
                                <table class="table border">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.employees ? userData.employees.map((employee, index) =>
                                            <Employee key={index} setShow={setShow} employee={employee} index={index + 1} />
                                        ) : <h1>No Employees to show.</h1>}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
