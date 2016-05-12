import React, { PropTypes } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import 'styles/App.css';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
