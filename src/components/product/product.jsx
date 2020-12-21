import React, { Component } from "react";
import { connect } from "react-redux";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";
import { increaseCounter, addProductToCart } from "../../store/actions/actions";

class Product extends Component {
  state = {
    quantity: 1,
  };
  // images/products/images-14....
  render() {
    return (
      <div className="product">
        <img src={"/images/products/" + this.props.data.image} alt=""></img>
        <h4>{this.props.data.title}</h4>
        <div className="price">
          <label className="total-value">${this.getTotal()}</label>
          <label className="price-value">
            ${this.props.data.price.toFixed(2)}
          </label>
        </div>
        <div className="picker">
          <QuantityPicker
            onValueChange={(qnty) => this.handleQuantityChange(qnty)}
          ></QuantityPicker>
        </div>
        <div className=" addbtn">
          <button onClick={this.addProduct} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    );
  }
  addProduct = () => {
    console.log("Dispatching action");
    this.props.increaseCounter();

    var addedProduct = {
      // create an object
      product: this.props.data,
      quantity: this.state.quantity,
    };

    this.props.addProductToCart(addedProduct);
  };

  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };
}
// 2parameters to connect
// 1st: function that maps the properties to read from the strore
// 2nd : a list of acions you want to dispatch
export default connect(null, { increaseCounter, addProductToCart })(Product);
