import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.get('users'),
});

export class DisplayUsers extends React.Component {
  
  displayUser = (user, key) => <div key={ key }>{ user.get('name') }</div>;

  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>Users</h1>
        { users.valueSeq().map((user, key) => this.displayUser(user, key)) }
      </div>
    );
  }
}

export default connect(mapStateToProps)(DisplayUsers);