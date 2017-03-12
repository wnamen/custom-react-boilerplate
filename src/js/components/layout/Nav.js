import React, { Component }           from 'react';
import { IndexLink }                  from 'react-router';
import cookie                         from 'react-cookie';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
        <nav class="navbar-fixed white-background">
          <div class="flex-row-spread">
            <div class="nav-left">
              <ul class="nav-links nav-hover large-left-padding medium-right-padding">
                <li><IndexLink to="/" ><strong>React Boilerplate</strong></IndexLink></li>
              </ul>
              <div class="medium-right-border gray-border"></div>
              <ul class="nav-links nav-hover medium-left-padding">
                <li><IndexLink to="/tutorials" >Tutorials</IndexLink></li>
              </ul>
            </div>
            <div class="nav-right">
              <ul class="nav-links">
                { !cookie.load('Token') && <li class="medium-horizontal-margin"><IndexLink to="/signup">Sign Up</IndexLink></li> }
                { !cookie.load('Token') && <li class="large-horizontal-margin"><IndexLink to="/login">Login</IndexLink></li> }
                { cookie.load('Token') && <li class="large-horizontal-margin nav-hover"><IndexLink class="black" to="/settings" activeClassName="active"><i class="gray-medium-2 fa fa-user-circle fa-2x" aria-hidden="true"></i></IndexLink></li> }
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;
