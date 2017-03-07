import React                                           from 'react';
import ReactDOM                                        from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }   from 'react-router';
import { Provider }                                    from 'react-redux';
import configureStore                                  from './configureStore';

import Layout                                          from './pages/Layout';
import Landing                                         from './pages/Landing';
import Tutorial                                        from './pages/Tutorial';
import Login                                           from './pages/Login';
import SignUp                                           from './pages/SignUp';
import Settings                                        from './pages/Settings';
import ServerError                                     from './pages/ServerError';
import NotFound                                        from './pages/NotFound';

import "../css/main.css";

const App = document.getElementById('app');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Landing} />
        <Route path="tutorials" name="tutorials" component={Tutorial} />
        <Route path="login" name="login" component={Login} />
        <Route path="signup" name="signup" component={SignUp} />
        <Route path="settings" name="settings" component={Settings} />
        <Route path="500" name="serverError" component={ServerError} />
        <Route path="*" name="notFound" component={NotFound} />
      </Route>
    </Router>
  </Provider>, App
);
