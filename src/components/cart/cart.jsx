import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "../ProductInCart";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className=" cart-msg">
        <h2>Your current cart</h2>
        <hr></hr>
        <h6>You have {this.props.count} items in your cart</h6>

        <div className="cart-products">
          {this.props.cart.map((p) => (
            <ProductInCart data={p}></ProductInCart>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
  };
};

// 2 parameters for connect
// 1st: function that maps the props to read from store
// 2nd: a list(obj) of actions you want tp dispatch

export default connect(mapStateToProps, null)(Cart);
