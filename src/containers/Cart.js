import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActionCreators from 'actions/cart';
import classnames from 'classnames';
import Transition from 'react-motion-ui-pack';
import CartToggle from 'components/CartToggle';
import Icon from 'components/ux/Icon'
import 'styles/Cart.css';

const CartItem = ({ item, onRemoveClick }) => {
  return (
    <div className="cart__item bb b--light-gray pa2">
      <div className="dtc tl">{item.data.name} - Qty. {item.quantity}</div>
      <div className="dtc tr"><button className="btn--link dim" onClick={() => onRemoveClick(item.data)}><Icon name="trash" /></button></div>
    </div>
  )
}

class CartOverlay extends React.Component {
  handleClick(e) {
    const { isOpen, toggleHandler } = this.props;
    if (isOpen) {
      toggleHandler()
    }
  }

  render() {
    const { isOpen, toggleHandler } = this.props;
    const classes = classnames('cart-overlay', 'w-100', 'h-100', {
      open: isOpen
    })
    return (
      <div onClick={::this.handleClick} className={classes} />
    )
  }
}

class Cart extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    toggleCartVisibility: PropTypes.func.isRequired
  }

  render() {
    const { items, isOpen, removeFromCart, toggleCartVisibility } = this.props;
    const cartClasses = classnames('cart', 'bg-white', 'w-35', { open: isOpen });

    let content = (
      <div className="pv4 ph3 mt2 tc light-silver">
        <Icon name="shopping-cart" size="5x" />
        <p>You haven't added anything to your cart yet!</p>
      </div>
    )

    if (items.length > 0) {
      content = items.map( (item, i) => <CartItem key={i} item={item} onRemoveClick={removeFromCart} /> )
    }

    return (
      <span className="cart-container">
        <CartOverlay toggleHandler={toggleCartVisibility} isOpen={isOpen} />
        <CartToggle
          className="link dim light-gray f6 f5-ns dib"
          toggleHandler={toggleCartVisibility}
          itemCount={items.length}
        />
        <div className={cartClasses}>
          <div className="cart-header bg-dark-gray bb b--dark-gray pt3 pb2 ph2 cf">
            <span className="fl ttu light-gray">Current Order ({items.length} items)</span>
            <button className="btn--link fr dim light-gray" onClick={() => toggleCartVisibility()}><Icon name="times-circle" size="lg" /></button>
          </div>
          {content}
        </div>
      </span>
    )
  }
}

function select(state) {
  return state.cart.toJS();
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(cartActionCreators, dispatch);
}

export default connect(select, mapDispatchToProps)(Cart);
