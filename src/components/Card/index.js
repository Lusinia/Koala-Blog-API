import React, { PureComponent } from 'react';
import {
  Card
} from 'reactstrap';
import './styles.scss';
import PropTypes from 'prop-types';
import * as selectors from '../../services/selectors';
import { connect } from 'react-redux';


class PostCard extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    post: PropTypes.object,
    history: PropTypes.object
  };

  state = {
    redirect: false
  };

  constructor(props) {
    super(props);
  }

  get post() {
    return this.props.post;
  }

  onClick = () => {
   this.props.history.push(this.route)
  };

  get route() {
    return `/posts/${this.props.id}`;
  }

  render() {
    return (
      <Card >
        <img src={this.post.imageURL} alt=""/>
        <div className="title-section">
          <div className="topic">building</div>
          <div className="title" onClick={this.onClick} role="presentation">{this.post.title}</div>
          <div className="justify">
            <div className="justify-text">{this.post.author}</div>
            <div className="justify-text">{this.post.date}</div>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: selectors.post(state, ownProps.id),
});

export default connect(mapStateToProps)(PostCard);
