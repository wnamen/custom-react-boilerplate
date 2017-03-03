import React                  from 'react';
import { IndexLink }          from 'react-router';

class ServerError extends React.Component {
  render = () => {
    return (
      <div class="ten offset-by-three white-background card flex-row-center">
        <div class="nine columns flex-column-center">
          <h1 class="electric-blue font-size-four small-vertical-margin"><strong class="largeText">Server Error</strong></h1>
          <h4 class="electric-blue font-size-one-and-half medium-vertical-margin text-center">We're sorry you're experiencing this, our developers
            have been notified.</h4>
          <IndexLink to="/" class="active button-empty button-fill large-vertical-margin">Take me home!</IndexLink>
        </div>
      </div>
    );
  }
};

export default ServerError;
