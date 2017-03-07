import React, { Component }         from 'react';
import { IndexLink }                from 'react-router';

class Header extends React.Component {
  render = () => {
    return(
      <div class="sixteen">
        <section class="header-container electric-blue-light-background flex-column-center">
          <h1 class="font-size-four small-vertical-margin">React Boilerplate</h1>
          <h6 class="gray font-size-one-and-half medium-vertical-margin">Start building with React today!</h6>
          <div class="large-margin">
            <IndexLink class="landing-button-empty medium-margin electric-blue-border small-border" to="/signup">Sign Up</IndexLink>
            <IndexLink class="landing-button-empty medium-margin electric-blue-border small-border" to="/login">Login</IndexLink>
          </div>
        </section>
      </div>
    )
  }
}

export default Header;
