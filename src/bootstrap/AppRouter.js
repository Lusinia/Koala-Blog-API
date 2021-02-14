import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainPage, PostPage, EditPostPage } from '../pages';
import * as actions from '../actions/auth';
import * as selectors from '../services/selectors';


class AppRouter extends Component {
  static propTypes = {
    actions: PropTypes.object,
    isStartSession: PropTypes.bool
  };

  constructor(props) {
    super(props);
    if (props.isStartSession) {
      props.actions.signQuick();
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/posts/create" component={EditPostPage} />
          <Route exact path="/posts/:id/edit" component={EditPostPage} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isStartSession: selectors.isStartSession(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
