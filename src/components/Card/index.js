import React, { PureComponent } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Card } from 'reactstrap';
import './styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectors, getDate } from '../../services';


const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png';

class PostCard extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    post: PropTypes.object,
    history: PropTypes.object
  };

  get post() {
    return this.props.post;
  }

  onClick = () => {
    this.props.history.push(this.route);
  };

  get route() {
    return `/posts/${this.props.id}`;
  }

  get author() {
    if (this.post.author) {
      const { firstName, lastName } = this.post.author;
      return `${firstName} ${lastName}`;
    }
    return 'No author';
  }

  render() {
    return (
      <Card>
        <img src={this.post.imageURL || defaultImage} alt="" />
        <div className="title-section">
          <div className="topic">building</div>
          <div className="title" onClick={this.onClick} role="presentation">{this.post.title}</div>
          <div className="justify">
            <div className="justify-text">
              <FaUsers />
              <p>{this.author}</p>
            </div>
            <div className="justify-text">{getDate(this.post.date)}</div>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: selectors.post(state, ownProps.id)
});

export default connect(mapStateToProps)(PostCard);
