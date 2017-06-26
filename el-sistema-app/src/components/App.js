import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AdminSide from './admin-side/AdminSide';
import UserSide from './user-side/UserSide';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={AdminSide} />
          <Route path='/' component={UserSide} />
        </Switch>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));



export default App;
