import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoute } from "components";
import { PageLoader, Header, Footer, FloatingBar } from "UIElements";

import { getSessions } from "__redux__/actions";

import "./App.scss";

const Login = lazy(() => import("../containers/Login"));
const Main = lazy(() => import("../containers/Main"));
const Home = lazy(() => import("../containers/Home"));

const App = ({ loggedInUser, getSessions }) => {
  useEffect(() => {
    getSessions();
  }, [getSessions]);

  return (
    <div className="app-wrapper">
      <Router>
        {!loggedInUser && <Header />}
        <Suspense fallback={<PageLoader message="Cargando" />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/admin" component={Main} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
        {!loggedInUser && (
          <>
            <FloatingBar />
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
    fetchingSession: state.auth.fetchingSession,
  };
};

const mapDispatchToProps = {
  getSessions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
