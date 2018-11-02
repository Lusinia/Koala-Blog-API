import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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
    count: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.getComments();
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

  onChangePage = index => {
    this.setState({ activePage: index }, async () => {
      await this.getComments();
    });
  };

  render() {
    return (
      <section className="comments">
        <div>
          {this.comments && _.map(this.comments, item => (
            <Comment item={item} key={item._id} />
          ))}
        </div>
        <Pagination aria-label="Page navigation example">
          {this.state.activePage > 1 && (
            <PaginationItem onClick={() => this.onChangePage(this.state.activePage - 1)}>
              <PaginationLink previous href="#" />
            </PaginationItem>
          )}
          {this.count && _.map(new Array(this.count), (item, index) => (
            <PaginationItem key={`pagination${index}`} onClick={() => this.onChangePage(index + 1)}>
              <PaginationLink href="#" className={index + 1 === this.state.activePage && 'active'}>
                {index + 1}
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
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: selectors.comments(state, ownProps.id),
  count: selectors.commentsCount(state, ownProps.id)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
