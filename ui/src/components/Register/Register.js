import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      age: 0,
      contribution: 0,
      match: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        contribution: this.state.contribution || 19500,
        match: this.state.match || 100
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const labelClasses = "db fw6 lh-copy f6";
    const inputClasses = "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100";
    return (
      <main className="pa4 black-80">
        <div>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className={labelClasses} htmlFor="name">Name</label>
              <input className={inputClasses} type="text" name="name" id="name" onChange={this.handleChange} />
            </div>
            <div className="mt3">
              <label className={labelClasses} htmlFor="email">Email</label>
              <input className={inputClasses} type="text" name="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="mt3">
              <label className={labelClasses} htmlFor="age">Age</label>
              <input className={inputClasses} type="number" name="age" id="age" onChange={this.handleChange} />
            </div>
            <div className="mt3">
              <label className={labelClasses} htmlFor="contribution">Contribution</label>
              <input className={inputClasses} type="number" name="contribution" id="contribution" defaultValue='19500' onChange={this.handleChange} />
            </div>
            <div className="mt3">
              <label className={labelClasses} htmlFor="match">Match</label>
              <input className={inputClasses} type="number" name="match" id="match" onChange={this.handleChange} />
            </div>
            <div className="mv3">
              <label className={labelClasses} htmlFor="password">Password</label>
              <input className={inputClasses} type="password" name="password" id="password" onChange={this.handleChange} />
            </div>
          </fieldset>
          <div className="mv3">
            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
          </div>
        </div>
      </main>
    );
  }
}

export default Register;