import React, { Component }       from 'react';
import Input                      from '../components/forms/Input';
import Button                     from '../components/forms/Button';
import axios                      from 'axios';
import cookie                     from 'react-cookie';

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
      axios.post('/api/user/login', form)
        .then(response => this.handleSuccess(response.token))
        .catch(error => console.log(error))
    }
  }

  handleSuccess = () => {
    cookie.save('auth', token, { path: '/' });
    this.context.router.push('/')
  }

  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <form class="flex-column-center large-vertical-margin">
          <h6 class="small-vertical-margin font-size-two">Login</h6>
          <div class="large-margin large-padding gray-light-background electric-blue-border small-border">
            <Input type="email" name="email" label="Email Address" onChange={this.handleFormData}/>
            <Input type="password" name="password" label="Password" onChange={this.handleFormData}/>
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

Login.contextTypes = {
  router: React.PropTypes.object
};

export default Login;
