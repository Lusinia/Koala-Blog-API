import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/comments';
import * as selectors from '../../services/selectors';
import { COMMENTS_LIMIT } from '../../constants';
import Comment from '../Comment.js';

import './styles.scss';


class CommentsSection extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    actions: PropTypes.object,
    isLoadingCreate: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    count: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      text: ''
    };
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoadingCreate && !this.props.isLoadingCreate) {
      this.updateData();
    }
  }

  async getComments() {
    await this.props.actions.getComments(this.props.id, this.state.activePage);
  }

  get comments() {
    return _.get(this.props, `comments[${this.state.activePage}]`);
  }

  get count() {
    return this.props.count ? Math.ceil(this.props.count / COMMENTS_LIMIT) : null;
  }

  get addCommentSection() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="textarea"
            name="commentText"
            id="commentText"
            placeholder="Type some comment"
            value={this.state.text}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button onClick={this.submit}>Add comment</Button>
      </Form>
    );
  }

  get paginationPages() {
    const middle = Math.round(this.count / 2);
    switch (this.state.activePage) {
    case 3:
    case 2:
    case 1: {
      return [1, 2, 3, middle, this.count];
    }
    case this.count - 1:
    case this.count: {
      return [1, middle, this.count - 1, this.count];
    }
    default:
      return [1, this.state.activePage - 1, this.state.activePage, this.state.activePage + 1, this.count];
    }
  }

  updateData = () => {
    this.setState({ text: '' });
    if (this.count !== this.state.activePage) {
      this.onChangePage(this.count);
    }
  };

  onChangePage = number => {
    this.setState({ activePage: number }, async () => {
      await this.getComments();
    });
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  submit = () => {
    if (this.state.text) {
      this.props.actions.createComment(this.props.id, { data: this.state.text });
    }
  };

  render() {
    return this.props.isLoggedIn ? (
      <section className="comments">
        <div>
          {this.comments && _.map(this.comments, item => (
            <Comment item={item} key={item._id} />
          ))}
        </div>
        <div className="add-comment">
          {this.addCommentSection}
        </div>
        <Pagination aria-label="Page navigation example">
          {this.state.activePage > 1 && (
            <PaginationItem onClick={() => this.onChangePage(this.state.activePage - 1)}>
              <PaginationLink previous href="#" />
            </PaginationItem>
          )}
          {this.count && _.map(this.paginationPages, (item) => (
            <PaginationItem key={`pagination${item}`} onClick={() => this.onChangePage(item)}>
              <PaginationLink href="#" className={item === this.state.activePage ? 'active' : null}>
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          {this.state.activePage !== this.count && (
            <PaginationItem onClick={() => this.onChangePage(this.state.activePage + 1)}>
              <PaginationLink next href="#" />
            </PaginationItem>
          )}
        </Pagination>
      </section>
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: selectors.comments(state, ownProps.id),
  count: selectors.commentsCount(state, ownProps.id),
  isLoggedIn: selectors.isLoggedIn(state),
  addCommentError: false, // selectors.commentsCount(state, ownProps.id),
  isLoadingCreate: selectors.isLoadingCreateComment(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
