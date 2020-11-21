import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {tokenExpireHelper, userLoginHelper, userLogout} from './redux/actions/userAction'
import setAuthToken from './redux/helper/setAuthToken'
import store from './redux/store'



//Pages and Components
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
import AddWorkSpace from './pages/WorkSpace/AddWorkSpace'
import AddChallenge from './pages/WorkSpace/AddChallenge'
import WorkFlow from './pages/WorkSpace/WorkFlow'
import Roles from './pages/Roles'
import Groups from './pages/Groups'
import EditWorkflow from './pages/EditWorkflow'
import Employees from './pages/Employees'
import ForgotPassword from './pages/ForgotPassword'
import ChallengeDetails from './pages/ChallengeDetails'
import ChallengePipeline from './pages/ChallengePipeline'





//TOKEN 
if (window.localStorage.ideaDeveloperUserToken) {
  setAuthToken(localStorage.ideaDeveloperUserToken);
  const decoded = jwt_decode(localStorage.ideaDeveloperUserToken);
  store.dispatch(userLoginHelper(decoded))
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(tokenExpireHelper());
    window.location.href = '/';
  }
}




function App() {
  const userData = useSelector(store => store.userRoot)
  return (
    <div className="App">
      <Router>
        <LandingNav />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          {userData.isVerified ? <>
            <Route exact path="/dashboard" component={Dashboard} />
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
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/roles" component={Roles} />
            <Route exact path="/groups" component={Groups} />
            <Route exact path="/challenge-details" component={ChallengeDetails} />
            <Route exact path="/challenge-pipeline" component={ChallengePipeline} />
            {/* STAGES */}
            <Route exact path="/workflow/:workflowId" component={EditWorkflow} />
          </> :
            <Redirect to="/" />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
