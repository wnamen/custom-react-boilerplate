import React, { Component }       from 'react';
import Input                      from '../components/forms/Input';
import Button                     from '../components/forms/Button';
import axios                      from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
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

    if (form.password === form.confirm) {
      console.log('good info', form);
      axios.post('/api/user/signup', form)
        .then(this.context.router.push('/'))
        .catch(error => console.log(error))
    } else {
      console.log('bad info', form);
    }
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <form class="flex-column-center large-vertical-margin">
          <h6 class="small-vertical-margin font-size-two">Sign Up</h6>
          <div class="large-margin large-padding gray-light-background electric-blue-border small-border">
            <Input type="text" name="firstName" label="First Name" onChange={this.handleFormData}/>
            <Input type="text" name="lastName" label="Last Name" onChange={this.handleFormData}/>
            <Input type="email" name="email" label="Email Address" onChange={this.handleFormData}/>
            <Input type="password" name="password" label="Password" onChange={this.handleFormData}/>
            <Input type="password" name="confirm" label="Confirm Password" onChange={this.handleFormData}/>
          </div>
          <div class="flex-row-spread">
            <Button value="Cancel" />
            <Button value="Submit" onClick={this.handleFormSubmit} />
          </div>
        </form>
      </div>
    );
  }
};

SignUp.contextTypes = {
  router: React.PropTypes.object
};

export default SignUp;
