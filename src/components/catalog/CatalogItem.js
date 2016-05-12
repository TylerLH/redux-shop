import React, { Component, PropTypes } from 'react';
import Transition from 'react-motion-ui-pack'
import { spring } from 'react-motion'
import Icon from 'components/ux/Icon';
import 'styles/CatalogItem.css';


class CartButton extends Component {
  render() {
    const {isAdded, onClick} = this.props;

    let iconClass = isAdded ? 'plus' : 'shopping-cart';

    return (
      <div className="tr">
        <button onClick={::this.props.onClick} className="btn btn--cart">
            <Icon name={iconClass} /> Add
        </button>
      </div>
    )
  }
}

class CatalogItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    addedToCart: PropTypes.bool.isRequired
  }

  handleCartButtonClick(e) {
    const {item, addToCart, removeFromCart, addedToCart} = this.props;
    if (addedToCart) {
      removeFromCart(item)
    } else {
      addToCart(item)
    }
  }

  render () {
    const { item, addedToCart } = this.props;
    return (
      <article className="catalog-item dark-gray w-100 w-50-ns ph2 mb4 fl">
        <div className="h-100 ba b--light-gray">
          <img src="http://placekitten.com/g/600/300" className="db w-100 br--top" />
          <div className="pa2 ph3-ns pb3-ns tl">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{item.name}</h1>
              </div>
              <div className="dtc tr">
                <h2 className="f5 mv0">{item.price_formatted}</h2>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              {item.description}
            </p>
            <CartButton onClick={::this.handleCartButtonClick} isAdded={addedToCart} />
          </div>
        </div>
      </article>
    )
  }
}

export default CatalogItem;
