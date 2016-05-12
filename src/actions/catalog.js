import fetch from 'isomorphic-fetch';

export const SET_CATEGORY_FILTER  = 'SET_CATEGORY_FILTER';
export const REQUEST_PRODUCTS     = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS     = 'RECEIVE_PRODUCTS';
export const REQUEST_FAILED       = 'REQUEST_FAILED';

export const Categories = {
  FLOWERS     : 'FLOWERS',
  CONCENTRATES: 'CONCENTRATES',
  EDIBLES     : 'EDIBLES',
  ACCESSORIES : 'ACCESSORIES'
}

const PRODUCTS_URL = 'http://localhost:3000/products';

export function setCategoryFilter(category) {
  return {
    type: SET_CATEGORY_FILTER,
    category
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts());
    fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
  }
}

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}

export function receiveProducts(data) {
  return {
    type: RECEIVE_PRODUCTS,
    data
  }
}
