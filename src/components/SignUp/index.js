import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth';
import './styles.scss';


class SignUp extends Component {
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
    password: '',
    passwordRepeat: '',
    firstName: '',
    lastName: ''
  };

  onChange = (data, field) => {
    this.setState({
      [field]: data.target.value
    });
  };

  onSubmit = async () => {
    const { firstName, lastName, email, password, passwordRepeat } = this.state;
    await this.props.actions.signUp({ firstName, lastName, email, password, passwordConf: passwordRepeat });
    this.props.toggle();
  };


  render() {
    return (
      <Card className="sign-up">
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
            <Label for="firstName">First name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={data => this.onChange(data, 'firstName')}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={data => this.onChange(data, 'lastName')}
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
          <FormGroup>
            <Label for="passwordRepeat">Repeat password</Label>
            <Input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              placeholder="Repeat password"
              value={this.state.passwordRepeat}
              onChange={data => this.onChange(data, 'passwordRepeat')}
            />
          </FormGroup>
          <div className="buttons">
            <Button color="success" onClick={this.onSubmit}>Sign Up</Button>
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
export default connect(null, mapDispatchToProps)(SignUp);
