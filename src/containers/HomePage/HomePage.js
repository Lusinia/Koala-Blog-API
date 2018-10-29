import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import * as actions from './actions';
import { bindActionCreators } from 'redux';


class HomePage extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    actions: PropTypes.object
  };

  constructor(props) {
    super(props);
    props.actions.getPosts();
  }

  render() {
    console.log('%c render!!! ', 'background: #222; color: red', this.props);

    return (
      <div className="home-page">Hdddge</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // currentUser: authSelectors.getCurrentUser(state),
    // isLoading: isLoadingEditUser(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
