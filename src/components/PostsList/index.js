import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { selectors } from '../../services';
import * as actions from '../../actions/posts';
import Card from '../Card';
import './styles.scss';


class PostsList extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.props.actions.getPosts();
  }

  get posts() {
    return _.get(this.props, 'posts', null);
  }

  get bannerPosts() {
    if (this.posts) {
      return _.map(this.posts, item => item);// .slice(0, 3);
    }
    return null;
  }

  render() {
    return (
      <div className="list">
        <div className="banner">
          {this.bannerPosts && _.map(this.bannerPosts, (item) => (
            <div className="card-wrapper" key={item._id}>
              <Card id={item._id} history={this.props.history} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: selectors.posts(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
