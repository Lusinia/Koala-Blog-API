import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from '../../components';
import * as actions from '../../actions/posts';
import * as selectors from '../../services/selectors';
import './styles.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
    this.id = props.match.params.id;
    if (!props.posts) {
      props.actions.getPost(this.id);
    }
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  get post() {
    return this.props.posts ? this.props.post : this.props.activePost;
  }

  goEditPost = () => {
    this.props.history.push(`/posts/${this.post._id}/edit`);
  };

  deletePost = () => {
    this.toggleModal();
  };

  deletePostSuccess = async () => {
   await this.props.actions.deletePost(this.id);
    this.toggleModal();
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="post">
        <Header/>
        <div className="post-wrapper">
          {this.post && (
            <article>
              <div className="post-image">
                <div className="image">
                  <img src={this.post.imageURL} alt="photo"/>
                </div>
                <div className="button">
                  <Button color="info" onClick={this.goEditPost}>Edit this post</Button>
                  <Button color="danger" onClick={this.deletePost}>Delete this post</Button>
                </div>
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
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.toggle}>Do yo want to delete this post?</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.deletePostSuccess}>Sure</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
