import {
  ADD_TO_CART,
  TOGGLE_CART_VISIBILITY,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from 'actions/cart';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  isOpen: false,
  items: []
})

function addToCart(state, action) {
  return state.update('items', items => items.push({ data: action.item, quantity: 1 }))
}

function removeFromCart(state, action) {
  return state.update('items', items => items.filter(item => item.data !== action.item))
}

function incrementQuantity(state, action) {
  let index = state.get('items').toArray().indexOf(action.item.data);
  state.setIn(['items', index, 'quantity'], value => value + 1)
}

function decrementQuantity(state, action) {
  let index = state.get('items').toArray().indexOf(action.item.data);
  state.setIn(['items', index, 'quantity'], value => value - 1)
}

function toggleCartVisibility(state, action) {
  return state.set('isOpen', !state.get('isOpen'))
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case INCREMENT_QUANTITY:
      return incrementQuantity(state, action);
    case DECREMENT_QUANTITY:
      return decrementQuantity(state, action);
    case TOGGLE_CART_VISIBILITY:
      return toggleCartVisibility(state, action);
    default:
      return state
  }
}
