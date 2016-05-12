// Action Types

export const ADD_TO_CART        = 'ADD_TO_CART';
export const REMOVE_FROM_CART   = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';

// Action Creators

export function addToCart(item) {
  return { type: ADD_TO_CART, item }
}

export function removeFromCart(item) {
  return { type: REMOVE_FROM_CART, item }
}

export function incrementQuantity(item) {
  return { type: INCREMENT_QUANTITY, item }
}

export function decrementQuantity(item) {
  return { type: DECREMENT_QUANTITY, item }
}

export function toggleCartVisibility() {
  return { type: TOGGLE_CART_VISIBILITY }
}
