import React from 'react'
import { withRouter } from 'react-router'
import auth from '../utils/auth.js'

const Login = React.createClass({
  getInitialState: function () {
      return {
        error: false,
        email: "",
        password: ""
      };
  },
  onSignIn: function(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  },
  signOut: function() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  },
  handleSubmit: function (event) {
    event.preventDefault();

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;

    // auth.login(email, pass, (loggedIn) => {
    //   if (!loggedIn)
    //     return this.setState({ error: true })

    //   const { location } = this.props

    //   if (location.state && location.state.nextPathname) {
    //     this.props.router.replace(location.state.nextPathname)
    //   } else {
    //     this.props.router.replace('/')
    //   }
    // })
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input 
        ref="email" 
        placeholder="email" 
        defaultValue={this.state.email} /></label>
        <label><input 
        ref="pass" 
        placeholder="password" 
        defaultValue={this.state.password}/></label> 

        <button type="submit">login</button>
        <div>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </div>

        <br />
        <span> -- OR --</span>
        <br />

        <div>
          <div id="g-signin2" data-onsuccess={this.onSignIn}>
          </div>
          <a href="#" onClick={this.signOut}>Sign out</a>
        </div>

      </form>
    )
  },
  componentDidMount: function() {
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 250,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
  }

})

export default withRouter(Login)