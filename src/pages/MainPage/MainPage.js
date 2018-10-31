import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Header, PostsList} from '../../components';

import { setName } from '../../actions/app';

const App = props => {
  return (
    <div className="App">
      <Header/>
      <PostsList history={props.history}/>
    </div>
  )
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.object,
  setText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.app.name,
});

const mapDispatchToProps = dispatch => ({
  setText: bindActionCreators(setName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
