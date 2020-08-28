import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//connect is a higher order component that lets us
//modify our component to have access to redux high
//order comp. are fucntions that take
//components as arguments and return powered up comp.
import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

//now the curretnUSer we see passed is coming
//from this mapsate to props, due to "connect"
//now we can remobe currentuser we passed in app.js
export default connect(mapStateToProps)(Header)
