import React, { Component } from "react";
import PropTypes from "prop-types";

/*
  Q3: UserStatus Class Component
  -----------------------------------------
  - Shows "Fetching user status..." initially
  - After 2 seconds → updates to "Active User"
  - Uses PropTypes to validate userId (required number)
*/

class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "Fetching user status..." };
  }

  componentDidMount() {
    // Update status after 2 seconds
    this.timer = setTimeout(() => {
      this.setState({ status: "Active User" });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { userId } = this.props;
    const { status } = this.state;

    return (
      <div style={{
        border: "1px solid #aaa",
        padding: "10px",
        borderRadius: "8px",
        width: "250px"
      }}>
        <p>User ID: {userId}</p>
        <p>Status: {status}</p>
      </div>
    );
  }
}

UserStatus.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserStatus;
