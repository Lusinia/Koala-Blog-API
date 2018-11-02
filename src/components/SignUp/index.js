import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth';
import './styles.scss';
import * as selectors from '../../services/selectors';


class SignUp extends Component {
  static propTypes = {
    actions: PropTypes.object,
    toggle: PropTypes.func
  };


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordRepeat: '',
      firstName: '',
      lastName: '',
      submited: false
    };
    this.validator = new SimpleReactValidator({
      password: {
        message: 'The :attribute must contain at least 6 symbols including letters and numbers.',
        // eslint-disable-next-line object-shorthand
        rule: function (val) {
          return this._testRegex(val, /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/i);
        }
      },
      passwordEqual: {
        message: 'The passwords must be equal',
        rule: () => this.state.passwordRepeat === this.state.password
      }
    });
  }

  // eslint-disable-next-line space-before-function-paren,class-methods-use-this
  get spacer() {
    return <div className="spacer" />;
  }

  onChange = (data, field) => {
    this.setState({
      [field]: data.target.value
    });
  };

  onSubmit = () => {
    this.setState({ submited: true }, async () => {
      if (this.validator.allValid()) {
        const { firstName, lastName, email, password, passwordRepeat } = this.state;
        await this.props.actions.signUp({ firstName, lastName, email, password, passwordConf: passwordRepeat });
        this.props.toggle();
      } else {
        this.validator.showMessages();
        this.forceUpdate();
      }
    });
  };

  getError = field => this.validator.fieldValid(field);

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
              invalid={!this.getError('email') && this.state.submited}
              placeholder="Email"
              value={this.state.email}
              onChange={data => this.onChange(data, 'email')}
            />
            {this.state.submited ? this.validator.message('email', this.state.email, 'required|email', 'text-danger') || this.spacer
              : this.spacer}
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              invalid={!this.getError('first name') && this.state.submited}
              placeholder="First name"
              value={this.state.firstName}
              onChange={data => this.onChange(data, 'firstName')}
            />
            {this.state.submited ? this.validator.message('first name', this.state.firstName, 'required|min:2|max:120', 'text-danger') || this.spacer
              : this.spacer}
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              invalid={!this.getError('last name') && this.state.submited}
              placeholder="Last name"
              value={this.state.lastName}
              onChange={data => this.onChange(data, 'lastName')}
            />
            {this.state.submited ? this.validator.message('last name', this.state.lastName, 'required|min:2|max:120', 'text-danger') || this.spacer
              : this.spacer}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              invalid={!this.getError('password') && this.state.submited}
              placeholder="Password"
              value={this.state.password}
              onChange={data => this.onChange(data, 'password')}
            />
            {this.state.submited ? this.validator.message('password', this.state.password, 'required|password|passwordEqual', 'text-danger') || this.spacer
              : this.spacer}
          </FormGroup>
          <FormGroup>
            <Label for="passwordRepeat">Repeat password</Label>
            <Input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              invalid={!this.getError('passwordRepeat') && this.state.submited}
              placeholder="Repeat password"
              value={this.state.passwordRepeat}
              onChange={data => this.onChange(data, 'passwordRepeat')}
            />
            {this.state.submited ? this.validator.message('passwordRepeat', this.state.passwordRepeat, 'required|password|passwordEqual', 'text-danger') || this.spacer
              : this.spacer}
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

const mapStateToProps = (state) => ({
  error: selectors.signUpError(state),
  isLoading: false
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
