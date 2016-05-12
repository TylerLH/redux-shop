import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import 'styles/Homepage.css';

class Homepage extends React.Component {
  render () {
    return (
      <section className="mw6 mw7-ns center bg-light-gray mt3 pa3 ph5-ns">
        <h1 className="mt0">Centered Container</h1>
        <p className="lh-copy measure">
          Combine width or max-width values with the center class to create a centered
          container for your content.
        </p>
      </section>
    )
  }
}

export default Homepage;
