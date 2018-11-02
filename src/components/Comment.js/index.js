import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './styles.scss';


class Comment extends PureComponent {
  static propTypes = {
    item: PropTypes.object
  };

  get author() {
    return _.get(this.props.item, 'author[0].firstName');
  }

  render() {
    return (
      <div className="comment">
        <div>
          <p className="text">{this.props.item.text}</p>
          <div className="bottom-section">
            <p>{this.author}</p>
            <p>{moment(this.props.item.updatedAt).format('D MMM YYYY')}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
