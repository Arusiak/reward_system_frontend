import './bootstrap-4.5.3-dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router , Route , Link , Redirect} from "react-router-dom";
import { Switch } from "react-router";
import Header from "./Components/Layout/header/Header";
import Signin from "./Components/Auth/Signin";
import Signup from "./Components/Auth/Signup";
import UserPage from "./Components/User/UserPage";
import AllPoints from "./Components/User/AllPoints";
import OtherUsers from "./Components/User/OtherUsers";
import Rules from "./Components/User/Rules";
import React from "react";
import AdminPage from "./Components/Admin/AdminPage";
import AllPointsUsers from "./Components/Admin/AllPointsUsers";
import UsersGift from "./Components/Admin/UsersGift";
import Example from './Components/Example';
import { history } from "./helpers/helpers";
import {useSelector} from "react-redux";
function App() {
    const { user: currentUser } = useSelector((state) => state.auth);

  return (
      <>
          <Header/>
          <Router>
              <Route exact path="/" >
                  <Redirect to="/signin" />
              </Route>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              {/*<Route path="/user" component={UserPage} />*/}
              {/*<Route path="/admin" component={AdminPage} />*/}
              <div className='container-fluid'>
                  <div className="row">
                      <div className="col-sm-12">
                          {!currentUser ?
                              <Redirect to="/signin"/>
                              :
                              <Switch>
                                  <Route path="/allpoints" component={AllPoints}/>
                                  <Route path="/otherUsers" component={OtherUsers}/>
                                  <Route path="/rules" component={Rules}/>
                              </Switch>
                          }
                      </div>
                  </div>
              </div>
              <div className='container-fluid'>
                  <div className="row">
                      <div className="col-sm-12">
                          <Switch>
                              <Route path="/allpointsusers" component={AllPointsUsers}/>
                              <Route path="/usersgift" component={UsersGift} />
                          </Switch>
                      </div>
                  </div>
              </div>
          </Router>
      </>
  );
}

export default App;
