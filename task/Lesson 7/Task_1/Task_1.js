import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Action isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LogInAction(props) {
  return <h1>You are logged in</h1>;
}

function LogOutAction(props) {
  return <h1>You are not logged in.</h1>;
}

function Action(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogInAction />;
  }
  return <LogOutAction />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default LoginControl;
