import * as React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';

import '../styles/index.scss';

import Decorator from './Decorator/Decorator';
import Users from './Users/Users';
import Home from './Home/Home';

import { browerHistory, getCurrentPath } from '../utils/history';
import TravelDestinations from './TravelDestinations/TravelDestinations';
import BusinessTrips from './BusinessTrips/BusinessTrips';

function getRedirectPath() {
  const redirectPath = getCurrentPath();
  return redirectPath;
}

function getRedirect(props: any) {
  return <Redirect to={props} />;
}

const App = () => {
  const redirectPath = getRedirectPath();
  return (
    <div className="App">
      <Router history={browerHistory}>
        <Decorator>
          <div>
            <Route
              exact={true}
              path="/"
              component={() => getRedirect('/home')}
            />
            <Route path="/home" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/travelDestinations" component={TravelDestinations} />
            <Route path="/businessTrips" component={BusinessTrips} />
          </div>
        </Decorator>
      </Router>
    </div>
  );
};

export default App;
