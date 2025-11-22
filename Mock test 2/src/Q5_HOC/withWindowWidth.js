import React from "react";

/*
  Q5: Higher Order Component (HOC)
  --------------------------------------------
  - Listens to window resize
  - Injects windowWidth prop into wrapped component
*/

const withWindowWidth = (WrappedComponent) => {
  return class extends React.Component {
    state = { width: window.innerWidth };

    updateSize = () => {
      this.setState({ width: window.innerWidth });
    };

    componentDidMount() {
      window.addEventListener("resize", this.updateSize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateSize);
    }

    render() {
      return <WrappedComponent windowWidth={this.state.width} {...this.props} />;
    }
  };
};

export default withWindowWidth;
