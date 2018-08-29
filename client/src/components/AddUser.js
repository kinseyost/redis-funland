import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/userActions.js';


const mapDispastchToProps = (dispatch) => ({
  addUser: bindActionCreators(addUser, dispatch),
});

export class AddUser extends React.Component {
  addUserRef = React.createRef();

  handleUserAdd = () => {
    const { addUser } = this.props;
    const input = this.addUserRef.current.value;
    const name = input.trim();
    addUser({ name })
  }

  render() {
    return (
      <div>
        <span>User Name: </span>
        <input ref={ this.addUserRef } />
        <button onClick={ this.handleUserAdd }>Add User</button>
      </div>
    );
  }
}

export default connect(null, mapDispastchToProps)(AddUser);