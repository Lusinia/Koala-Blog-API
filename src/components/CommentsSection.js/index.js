import React, { PureComponent } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/comments';
import * as selectors from '../../services/selectors';
import Comment from '../Comment.js';
import _ from 'lodash';


class CommentsSection extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    activePage: PropTypes.string
  };

  constructor(props) {
    super(props);
    props.actions.getComments(props.id)
  }

  get comments() {
    return this.props.comments;
  }

  render() {
    return (
      <section className="comments">
        <div>
          {this.comments && _.map(this.comments[this.props.activePage], item => (
            <Comment item={item} key={item._id}/>
          ))}
        </div>
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: selectors.comments(state, ownProps.id)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
