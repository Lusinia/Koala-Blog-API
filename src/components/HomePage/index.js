import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles.scss';
import actions from '../../redux/actions/actions';

class HomePage extends PureComponent {
  // static propTypes = {};

  constructor(props){
      super(props);
      // props.actions.loadPosts();
  }

  render() {
    return (
      <div>hello world</div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
