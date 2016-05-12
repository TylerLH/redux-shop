import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Cart from 'containers/Cart';
import 'styles/Navbar.css';

class Navbar extends React.Component {
  render () {
    return (
      <nav className="db bg-dark-gray dt-ns w-100 border-box bb b--light-gray pa3 ph5-ns">
        <IndexLink className="db dtc-ns v-mid white link dim w-100 w-25-ns tc tl-ns mb2 mb0-ns ttu tracked b" to="/">Herbo</IndexLink>
        <div className="db dtc-ns v-mid w-100 w-75-ns tc tr-ns">
          <IndexLink className="link dim light-gray f6 f5-ns dib mr3 mr4-ns" activeClassName="active" to="/">Home</IndexLink>
          <IndexLink className="link dim light-gray f6 f5-ns dib mr3 mr4-ns" activeClassName="active" to="shop">Shop</IndexLink>
          <Cart />
        </div>
      </nav>
    )
  }
}

export default Navbar;
