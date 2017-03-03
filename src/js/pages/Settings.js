import React, { Component }                   from 'react';
import $                                      from 'jquery';
import cookie                                 from 'react-cookie';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background settingsCard">
        <h6 class="small-vertical-margin">Settings</h6>
      </div>
    );
  }
}

export default Settings;
