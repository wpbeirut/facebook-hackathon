import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Calendar from "../pages/Calendar/Calendar";
import Navigator from "../layout/Navigator";
import Page from "./Page";
import Settings from "../pages/Settings/components/Settings";
import MyMentors from "../pages/MyMentors/MyMentors";
import MyMedicines from "../pages/MyMedicines/MyMedicines";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const MyRoute = MyRouteProps => {
  const Component = MyRouteProps.component;
  const isLoggedIn = localStorage.getItem("token") === "token";
  const publicRoute = MyRouteProps.publicRoute ? true : false;

  if (isLoggedIn || publicRoute) {
    return (
      <div>
          <Page props={{ ...MyRouteProps }}>
            <Route
              render={originalRouteProps => (
                <Component {...originalRouteProps} />
              )}
            />
          </Page>
        {isLoggedIn ? <Navigator /> : ""}
      </div>
    );
  } else {
    return (
      <Route
        render={originalRouteProps => (
          <SignIn props={{ ...MyRouteProps }} {...originalRouteProps} />
        )}
      />
    );
  }
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MyRoute exact path="/" component={Home} title="Home" />
        <MyRoute exact path="/Calendar" component={Calendar} title="Calendar" />
        <MyRoute
          exact
          path="/my_medicines"
          component={MyMedicines}
          title="My medicines"
        />
        <MyRoute
          exact
          path="/my_mentors"
          component={MyMentors}
          title="My mentors"
        />
        <MyRoute exact path="/settings" component={Settings} title="Settings" />
        <MyRoute exact path="/signin" component={SignIn} publicRoute />
        <MyRoute exact path="/signup" component={SignUp} publicRoute />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
