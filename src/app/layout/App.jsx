import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import EventDetaildPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/events/EventForm/EventForm';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>

        <Route path="/(.+)" render={() => {
          return <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/test" component={TestComponent} />
                <Route path="/event/:id" component={EventDetaildPage} />
                <Route path="/manage/:id" component={EventForm} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </div>
        }}
        />
      </div>
    );
  }
}

export default App;