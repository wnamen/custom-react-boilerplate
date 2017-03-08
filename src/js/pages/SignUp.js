import React, { Component }       from 'react';
import Input                      from '../components/forms/Input';
import Button                     from '../components/forms/Button';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        first: '',
        last: '',
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
    } else {
      console.log('bad info', form);
    }
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <form class="flex-column-center large-vertical-margin">
          <h6 class="small-vertical-margin font-size-two">SignUp</h6>
          <div class="large-margin large-padding gray-light-background electric-blue-border small-border">
            <Input type="text" name="first" placeholder="First Name" label="First Name" onChange={this.handleFormData}/>
            <Input type="text" name="last" placeholder="Last Name" label="Last Name" onChange={this.handleFormData}/>
            <Input type="text" name="email" placeholder="Email Address" label="Email Address" onChange={this.handleFormData}/>
            <Input type="text" name="password" placeholder="Password" label="Password" onChange={this.handleFormData}/>
            <Input type="text" name="confirm" placeholder="Confirm Password" label="Confirm Password" onChange={this.handleFormData}/>
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

export default SignUp;
