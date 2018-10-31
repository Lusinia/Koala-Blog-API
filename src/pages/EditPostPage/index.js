import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/posts';
import { Header } from '../../components';
import * as selectors from '../../services/selectors';
import './styles.scss';


class EditPostPage extends Component {
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
    this.state = {
      title: _.get(props, 'post.title', ''),
      body: _.get(props, 'post.body', ''),
      imageURL: _.get(props, 'post.imageURL')
    };
    if (!props.posts && this.id) {
      props.actions.getPost(id);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.activePost && this.props.activePost) {
      const { title, body, imageURL } = this.props.activePost;
      this.updateState({ title, body, imageURL });
    }
  }

  get buttonTitle() {
    return this.id ? 'Edit' : 'Create';
  }

  updateState = data => {
    this.setState(data);
  };

  onChange = (data, field) => {
    this.setState({
      [field]: data
    });
  };

  onChangeTitle = event => {
    this.onChange(event.target.value, 'title');
  };

  onChangeBody = event => {
    this.onChange(event.target.value, 'body');
  };

  onChangeImage = data => {
    this.onChange(data, 'imageURL');
  };

  onFileChange = event => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.onChangeImage(reader.result);
    };
  };

  onSubmit = async () => {
    if (this.id) {
      await this.props.actions.editPost(this.state, this.id);
    } else {
      await this.props.actions.createPost(this.state);
    }
    this.props.history.goBack();
  };


  render() {
    return (
      <div className="create-post">
        <Header/>
        <div className="create-post-wrapper">
          <Form>
            <FormGroup>
              <Label for="postImage">Select the image</Label>
              <Input
                type="file"
                name="file"
                id="postImage"
                onChange={this.onFileChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Post title"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="body">Post content</Label>
              <Input
                type="textarea"
                name="body"
                id="body"
                placeholder="Post content"
                value={this.state.body}
                onChange={this.onChangeBody}
              />
            </FormGroup>
            <Button color="info" onClick={this.onSubmit}>{this.buttonTitle} this post</Button>
          </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
