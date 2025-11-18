// This component will catch errors in any other component
// It prevents app from crashing if error occurs

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3 className="text-center mt-4 text-danger">Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
