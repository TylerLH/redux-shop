import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
        <small className="f6 db tc">© 2016 <b className="ttu">HERBO LLC</b>., All Rights Reserved</small>
        <div className="tc mt3">
          <a href="#" className="f6 dib ph2 link mid-gray dim">Language</a>
          <a href="#" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
          <a href="#" className="f6 dib ph2 link mid-gray dim">Privacy</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
