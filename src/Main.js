import React from 'react';
import { connect } from 'react-redux';

// Here we have a functional component with two props: name value and onSetNewName function.
const MyComponent = ({ name, onSetNewName }) => (
  <div>
    <h3>Hi, my name is {name}</h3>
    <input type="text" onChange={onSetNewName} value={name} />
  </div>
);

// Our component's name prop will be mapped to the name value of store ...
const mapStateToProps = state => ({
  name: state.name
});

// ... and our component's onSetNewName prop will be mapped to dispatch
// an action which contains a new name.
const mapDispatchToProps = dispatch => ({
  onSetNewName: e => dispatch({ type: 'SET_NEW_NAME', newName: e.target.value })
});

// Here we connect our component ...
const MyContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent);

const Main = () => (
  <div>
    <MyContainer />
  </div>
)

export default Main;
