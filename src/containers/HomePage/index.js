import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>Home age</div>
    )
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool
};
