import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as catalogActions from 'actions/catalog';
import * as cartActions from 'actions/cart';
import Transition from 'react-motion-ui-pack';
import CatalogFilter from 'components/CatalogFilter';
import CatalogItem from 'components/catalog/CatalogItem';
import Spinner from 'react-spinkit';
import find from 'lodash/find';
import classnames from 'classnames';

const actions = Object.assign({}, cartActions, catalogActions)

function getState(state) {
  return {
    ...state.catalog.toJS(),
    cartItems: state.cart.get('items').toJS()
  }
}

function cartHasItem(cartItems, item) {
  if (find(cartItems, cartItem => cartItem.data === item)) {
    return true;
  }
  return false;
}

function getActions(dispatch) {
  return bindActionCreators(actions, dispatch)
}

class Catalog extends React.Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  renderItems(items) {
    const {cartItems} = this.props;
    return items.map( (item, i) => {
      const addedToCart = cartHasItem(cartItems, item);
      return (
        <CatalogItem
          key={i}
          item={item}
          addedToCart={addedToCart}
          {...this.props}
        />
      )
    })
  }

  render () {
    const { items, isFetching } = this.props;
    let content;

    const spinnerClasses = classnames('animated', 'tc', 'center', {
      'fadeInDown': isFetching,
      'fadeOutUp': !isFetching
    })

    if (isFetching) {
      content = (
        <div className="spinner-container mv4 tc animated fadeInUp">
          <Spinner spinnerName="double-bounce" className={spinnerClasses} />
          <p className="ttu tracked gray animated fadeIn">Loading Catalog</p>
        </div>
      )
    } else {
      content = (
        <div className="catalog-content cf">
          <div className="w-25-ns fl">
            <CatalogFilter />
          </div>
          <div className="w-75-ns fl">
            {this.renderItems(items)}
          </div>
        </div>
      )
    }

    return (
      <div className="catalog border-box mw8 mw9-ns tc pa3">
        {content}
      </div>
    )
  }
}

export default connect(getState, getActions)(Catalog);
