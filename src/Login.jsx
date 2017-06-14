import React, { Component } from "react";
import { connect } from "react-redux";

// Here we have a functional component with two props: name value and onSetNewName function.
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.name);
  }

  render() {
    return (
      <div>
        <h3>Log in</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// ... and our component's onSetNewName prop will be mapped to dispatch
// an action which contains a new name.
const mapDispatchToProps = dispatch => ({
  handleSubmit: name => dispatch({ type: "LOG_IN", name })
});

// Here we connect our component ...
const LoginForm = connect(null, mapDispatchToProps)(NameForm);

const Login = () =>
  <div>
    <LoginForm />
  </div>;

export default Login;
