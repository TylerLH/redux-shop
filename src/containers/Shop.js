import React, { PropTypes } from 'react';
import Catalog from 'containers/Catalog';
import Cart from 'containers/Cart';

class Shop extends React.Component {
  render () {
    return (
      <div className="mw-8">
        <Catalog />
      </div>
    )
  }
}

export default Shop;
