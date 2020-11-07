import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEmployee } from '../redux/actions/userAction'
import Loader from '../components/Loader'

const AddEmployee = () => {
    const userData = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addEmployee({ email, firstName, lastName, role, password, organization: userData.user.organization}))
       
    }
    return (
        <div className="modal fade" id="addEmployeeModal" tabIndex="-1" aria-labelledby="addEmployeeModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addEmployeeModal">ADD EMPLOYEE</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formHandler}>
                                <div className="form-group">
                                    <label htmlFor="employeeFirstNameId">First Name</label>
                                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="employeeFirstNameId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="employeeLastNameId">Last Name</label>
                                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="employeeLastNameId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="employeeEmailId">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="employeeEmailId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="employeeRole">Role</label>
                                <select onChange={(e)=>setRole(e.target.value)} id="#employeeRole" className="form-control">
                                    <option>Select</option>
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Full Stack">Full Stack</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </div>
                                <div className="form-group">
                                    <label htmlFor="employeePasswordId">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="employeePasswordId" />
                            </div>
                            {userData.loader ? <Loader /> : <button type="submit" className="btn btn-primary">Submit</button>}
                          </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
