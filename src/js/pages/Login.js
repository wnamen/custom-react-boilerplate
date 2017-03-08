import React, { Component }       from 'react';
import Input                      from '../components/forms/Input';
import Button                     from '../components/forms/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: ''
      }
    }
  }

  handleFormData = (e) => {
    let form = this.state.formData;
    form[e.target.name] = e.target.value;
    this.setState(form);
  }

  handleFormSubmit = (e) => {
    let form = this.state.formData;

    if ((form.password === '') || (form.email === '')) {
      console.log('bad info', form);
    } else {
      console.log('good info', form);
    }
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <form class="flex-column-center large-vertical-margin">
          <h6 class="small-vertical-margin font-size-two">Login</h6>
          <div class="large-margin large-padding gray-light-background electric-blue-border small-border">
            <Input type="text" name="email" placeholder="Email Address" label="Email Address" onChange={this.handleFormData}/>
            <Input type="text" name="password" placeholder="Password" label="Password" onChange={this.handleFormData}/>
          </div>
          <div class="flex-row-spread">
            <Button value="Cancel" />
            <Button value="Login" onClick={this.handleFormSubmit} />
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
