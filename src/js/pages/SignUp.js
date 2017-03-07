import React, { Component }       from 'react';
import Input                      from '../components/forms/Input';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <h6 class="small-vertical-margin font-size-two">SignUp</h6>
        <form class="flex-column-center">
          <Input type="text" placeholder="First Name" label="First Name" />
          <Input type="text" placeholder="Last Name" label="Last Name" />
          <Input type="text" placeholder="Email Address" label="Email Address" />
          <Input type="text" placeholder="Password" label="Password" />
          <Input type="text" placeholder="Confirm Password" label="Confirm Password" />
        </form>
      </div>
    );
  }
};

export default SignUp;
