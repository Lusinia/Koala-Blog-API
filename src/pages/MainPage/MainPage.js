import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import logo from '../../static/svg/logo.svg';

import { setName } from '../../actions/app';

const App = ({ name, setText }) => (
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      {name}
    </p>
    <button type="button" onClick={() => setText('REACT REDUX CORDOVA BOILERPLATE')}>
      SHOW NAME
    </button>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.app.name,
});

const mapDispatchToProps = dispatch => ({
  setText: bindActionCreators(setName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
