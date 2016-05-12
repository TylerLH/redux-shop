import React, { PropTypes } from 'react'
import classNames from 'classnames'
import Icon from 'components/ux/Icon'
import 'styles/CartToggle.css'

class CartToggle extends React.Component {
  static propTypes = {
    toggleHandler: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired
  }

  handleClick(e) {
    const { toggleHandler } = this.props;
    e.preventDefault();
    toggleHandler();
  }
  render () {
    const {itemCount} = this.props;
    const classes = classNames(this.props.className)
    return (
      <a className={classes} href="#" onClick={::this.handleClick}>
        <Icon name="shopping-cart" size="lg" />
        <span className="f6">&nbsp;{itemCount}</span>
      </a>
    )
  }
}

export default CartToggle;
