import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, PostsList } from '../../components';
import { Button } from 'reactstrap';
import { setName } from '../../actions/app';
import './styles.scss';


class MainPage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    history: PropTypes.object,
    setText: PropTypes.func.isRequired,
  };

  goCreatePost = () => {
    this.props.history.push('/posts/create');
  };

  render() {
    return (
      <div>
        <div className="App">
          <Header/>
          <PostsList history={this.props.history}/>
          <div className="temp-button">
            <Button color="info" onClick={this.goCreatePost}>Create post</Button>{' '}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.app.name,
});

const mapDispatchToProps = dispatch => ({
  setText: bindActionCreators(setName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
