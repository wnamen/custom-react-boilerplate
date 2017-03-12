import React, { Component }               from 'react';
import Button                             from '../components/forms/Button';
import { connect }                        from 'react-redux';

import { logout }                          from '../actions/authentication';

class Settings extends React.Component {
  handleLogOut = () => {
    this.props.logout();
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card flex-spread">
        <h6 class="font-size-two no-margin">Settings</h6>
        <div>
          <Button value="Logout" onClick={this.handleLogOut}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { logout })(Settings);
