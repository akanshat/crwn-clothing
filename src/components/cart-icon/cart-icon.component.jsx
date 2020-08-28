import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//  MAP STATE TO PROPS IS ALWAYS CALLED EVEN IF USER CHANGES OR ANY STATE CHANGES ANYWHERE
// BECAUSE REDUCER IS RERENDERING
// REDUCER DOESN'T KNOW IT IS BEING CALLED FOR SOMETHING NEW OR THE SAME VALUES
// OUR STATE IS ALWAYS A NEW OBJECT EVEN IF VALUE IS IDENTICAL
// IT SAYS EVERYTHING IS BRAND NEW OBJECT, EVEN IF EVERY VALUE IS SAME
// NOT GOOD FOR PERFORMANCE
// WE DONT WANT IT TO RERENDER IF EVERYTIME STATE CHANGES BUT IT IS NOT MODYING THE PARTS COMPONENT CARES ABOUT

// WE CAN STORE VALUES THAT OUR SELECTOR IS USING TO CALCULATE ITS VALUES--> MEMOIZATION
// SO IF OUTPUT OF SELECTOR DOESNT CHANGE WE DONT RERENDER

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
