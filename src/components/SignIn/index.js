import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth';
import './styles.scss';
import * as selectors from '../../services/selectors';


class SignIn extends Component {
  static propTypes = {
    actions: PropTypes.object,
    error: PropTypes.string,
    toggle: PropTypes.func
  };

  state = {
    email: '',
    password: '',
    submited: false
  };

  validator = new SimpleReactValidator();

  // eslint-disable-next-line space-before-function-paren,class-methods-use-this
  get spacer() {
    return <div className="spacer" />;
  }

  get error() {
    return this.props.error && <div className="error">{this.props.error}</div>;
  }

  onChange = (data, field) => {
    this.setState({
      [field]: data.target.value
    });
  };

  getError = field => this.validator.fieldValid(field);

  onSubmit = async () => {
    this.setState({ submited: true }, async () => {
      if (this.validator.allValid()) {
        const { email, password } = this.state;
        await this.props.actions.signIn({ email, password });
        // this.props.toggle();
      } else {
        this.validator.showMessages();
        this.forceUpdate();
      }
    });
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
              invalid={!this.getError('email') && this.state.submited}
              placeholder="Email"
              value={this.state.email}
              onChange={data => this.onChange(data, 'email')}
            />
            {this.state.submited ? this.validator.message('email', this.state.email, 'required|email', 'text-danger') || this.error || this.spacer
              : this.spacer}
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
            {this.spacer}
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

const mapStateToProps = (state) => ({
  error: selectors.signInError(state),
  isLoading: false
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
