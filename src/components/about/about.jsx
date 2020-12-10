import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVisible: false,
  };
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Marisol Rodriguez</h1>

        <p className="Lead">
          Contact me via email so we can discuss your future projects.
        </p>

        {this.getEmailText()}
        <button
          onClick={this.handleBtnClick}
          className="btn btn-primary btn-lg"
        >
          Show Email
        </button>
      </div>
    );
  }

  handleBtnClick = () => {
    this.state({ isEmailVisible: true });
    //timer to hide it back
    setTimeout(() => {
      this.setState({ isEmailVisible: false });
    }, 30000);
  };

  getEmailText = () => {
    if (this.state.isEmailVisible) {
      return (
        <a href="mailto:marisol_rodriguez43@yahoo.com">contact@marisol.com</a>
      );
    } else {
      return <h6>Click on the button to view email address</h6>;
    }
  };
}
export default About;
