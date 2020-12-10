import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    qnty: 1,
    name: "",
  };

  render() {
    return (
      <div className="qntPicker">
        <h6>{this.state.name}</h6>
        <button className="btn btn-info" onClick={this.increase}>
          +
        </button>

        <label>{this.state.qnty}</label>

        <button className="btn btn-info" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
  increase = () => {
    /**
     * read current val
     * increase it by 1
     * update the state
     */
    var current = this.state.qnty;
    current += 1;
    this.setState({ qnty: current });
    this.props.onValueChange(current);
  };

  decrease = () => {
    var current = this.state.qnty - 1;
    if (current > 0) {
      this.setState({ qnty: current });
      this.props.onValueChange(current);
    }

    //var current = this.state.qnty > 1 && this.state.qnty - 1;
    // this.setState({
    //  qnty: this.state.qnty > 1 ? this.state.qnty - 1 : this.state.qnty,
  };
}

// state is inmutable, you should not modify it,

// call the setState instead
export default QuantityPicker;
