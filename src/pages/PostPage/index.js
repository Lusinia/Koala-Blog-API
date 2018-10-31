import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from '../../components';
import * as actions from '../../actions/posts';
import * as selectors from '../../services/selectors';
import './styles.scss';


class PostPage extends Component {
  static propTypes = {
    history: PropTypes.object,
    post: PropTypes.object,
    posts: PropTypes.object,
    actions: PropTypes.object,
    activePost: PropTypes.object,
  };

  constructor(props) {
    super(props);
    if (!props.posts) {
      const { id } = props.match.params;
      props.actions.getPost(id);
    }
  }

  get post() {
    return this.props.posts ? this.props.post : this.props.activePost;
  }

  render() {
    return (
      <div className="post">
        <Header/>
        <div className="post-wrapper">
          {this.post && (
            <article>
              <div className="post-image">
                <img src={this.post.imageURL} alt="photo"/>
              </div>
              <div className="post-content">
                <div className="title">
                  <h1>{this.post.title}</h1>
                </div>
                <section className="body">
                  {this.post.body}
                </section>
              </div>
            </article>
          )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    post: selectors.post(state, id),
    activePost: selectors.activePost(state),
    posts: selectors.posts(state)
  };
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
