import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {userLoginHelper, userLogout} from './redux/actions/userAction'
import setAuthToken from './redux/helper/setAuthToken'
import store from './redux/store'



//Components
import LandingNav from './components/LandingNav'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Challenges from './pages/Challenges'
import ExecutionBoards from './pages/ExecutionBoards'
import GeneralSetting from './pages/GeneralSetting'
import Ideas from './pages/Ideas'
import Reports from './pages/Reports'
import UserManagement from './pages/UserManagement'
import CreateGroup from './pages/CreateGroup'

//WorkSpace
import AddWorkSpace from './pages/WorkSpace/AddWorkSpace'
import AddChallenge from './pages/WorkSpace/AddChallenge'
import WorkFlow from './pages/WorkSpace/WorkFlow'

import Roles from './pages/Roles'
import Groups from './pages/Groups'


import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AddEmployee from './components/AddEmployee'
import LogoutModal from './components/LogoutModal'
import ResetPassword from './components/ResetPassword'

//Admin
import Employees from './pages/Employees'

//Pages
import ForgotPassword from './pages/ForgotPassword'


if (window.localStorage.userJwtToken) {
  setAuthToken(localStorage.userJwtToken);
  const decoded = jwt_decode(localStorage.userJwtToken);
  store.dispatch(userLoginHelper(decoded))
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(userLogout());
    window.location.href = '/';
  }
}




function App() {
  return (
    <div className="App">
      <Router>
        <RegisterForm />
        <LoginForm />
        <AddEmployee />
        <LogoutModal />
        <ResetPassword />
        <LandingNav />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/addWorkSpace" component={AddWorkSpace} />
          <Route exact path="/addChallenge" component={AddChallenge} />
          <Route exact path="/workFlow" component={WorkFlow} />
          <Route exact path="/setting" component={GeneralSetting} />
          <Route exact path="/userManagement" component={UserManagement} />
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/executionBoards" component={ExecutionBoards} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/groups" component={Groups} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
