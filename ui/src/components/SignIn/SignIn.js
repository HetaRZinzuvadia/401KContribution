import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    const labelClasses = 'db fw6 lh-copy f6';
    const inputClasses = 'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100';
    return (
      <main className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className={labelClasses} htmlFor="email">Email</label>
              <input className={inputClasses} type="email" name="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="mv3">
              <label className={labelClasses} htmlFor="password">Password</label>
              <input className={inputClasses} type="password" name="password" id="password" onChange={this.handleChange} />
            </div>
          </fieldset>
          <div>
            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Signin;