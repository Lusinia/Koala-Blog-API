import React, { PureComponent } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

class Comment extends PureComponent {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    return (
      <div className="comment">
        <div>
          <p className="text">{this.props.item.text}</p>
          <div className="bottom-section">
            <p>{this.props.item.author}</p>
            <p>{moment(this.props.item.updatedAt).format('D MMM YYYY')}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
