import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from 'actions/catalog';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  isFetching: false,
  items: []
})

function receiveProducts(state, action) {
  return state
    .set('items', action.data)
    .set('isFetching', false)
}

export default function catalog(state = initialState, action) {
  switch(action.type) {
    case REQUEST_PRODUCTS:
      return state.set('isFetching', true);
    case RECEIVE_PRODUCTS:
      return receiveProducts(state, action)
    default:
      return state
  }
}
