import React, { Component, PropTypes }  from "react";
import { IndexLink }                    from "react-router";
import cookie                           from "react-cookie";


class Nav extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
        <nav class="navbar-fixed white-background">
          <div class="flex-row-spread">
            <div class="nav-left">
              <ul class="nav-links nav-hover large-left-padding medium-right-padding">
                <li><IndexLink to="/" ><strong>Home</strong></IndexLink></li>
              </ul>
              <div class="medium-right-border gray-border"></div>
            </div>

            <div class="nav-right">
              <ul class="nav-links">
                <li id="settings-button" class="large-right-margin nav-hover">
                  <IndexLink class="black" to="/settings" activeClassName="active"><i class="gray-medium-2 fa fa-user-circle fa-2x" aria-hidden="true"></i></IndexLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;
