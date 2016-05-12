import React, { PropTypes } from 'react'

const STRAINS = ['Indica', 'Sativa', 'Hybrid', 'High CBD']

const PRODUCTS = ['Flowers', 'Edibles', 'Concentrates', 'Pre-Rolls', 'Accessories']

class CatalogFilter extends React.Component {
  render () {
    return (
      <div className="catalog-filter tl ph3">
        <div className="filter-set ba bw2 b--mid-gray pa3 mb3">
          <h3 className="ttu mid-gray ttu tracked mt1">Strains</h3>
          <ul className="list pl3">
            {STRAINS.map( (strain, i) => <li key={i} className="mv2"><a href="#" className="link dim">{strain}</a></li> )}
          </ul>
        </div>
        <div className="filter-set ba bw2 b--mid-gray pa3">
          <h3 className="ttu mid-gray ttu tracked mt1">Products</h3>
          <ul className="list pl3">
            {PRODUCTS.map( (product, i) => <li key={i} className="mv2"><a href="#" className="link dim">{product}</a></li> )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CatalogFilter;
