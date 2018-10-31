import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth';
import './styles.scss';


class SignIn extends Component {
  static propTypes = {
    history: PropTypes.object,
    post: PropTypes.object,
    posts: PropTypes.object,
    actions: PropTypes.object,
    activePost: PropTypes.object,
    toggle: PropTypes.func
  };

  state = {
    email: '',
    password: ''
  };

  onChange = (data, field) => {
    this.setState({
      [field]: data.target.value
    });
  };

  onSubmit = async () => {
    const { email, password } = this.state;
    await this.props.actions.signIn({ email, password });
    this.props.toggle();
  };


  render() {
    return (
      <Card className="sign-in">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={data => this.onChange(data, 'email')}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={data => this.onChange(data, 'password')}
            />
          </FormGroup>
          <div className="buttons">
            <Button color="success" onClick={this.onSubmit}>Sign In</Button>
            <Button color="info" onClick={this.props.toggle}>Cancel</Button>
          </div>
        </Form>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(null, mapDispatchToProps)(SignIn);
