import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from 'reactstrap';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './styles.scss';


export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
      isOpenModal: false,
      isOpenModalSignIn: false
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal
    }));
  };

  toggleModalSignIn = () => {
    this.setState(prevState => ({
      isOpenModalSignIn: !prevState.isOpenModalSignIn
    }));
  };

  get leftSideMenu() {
    return (
      <div className="left-menu">
        <Nav className="ml-auto" navbar>
          {!this.state.isOpen ? (
            <React.Fragment>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/aleshka">Aleshka</Link>
              </NavItem>
            </React.Fragment>
          ) : this.dropdown}
        </Nav>
      </div>
    );
  }

  get dropdown() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
        <DropdownToggle caret>
          Go to
        </DropdownToggle>
        <DropdownMenu>
          <DropdownMenu right>
            <DropdownItem>
              <Link to="/">Home</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/aleshka">Aleshka</Link>
            </DropdownItem>
            <DropdownItem divider/>
          </DropdownMenu>
        </DropdownMenu>
      </Dropdown>
    );
  }

  get rightSideMenu() {
    return (
      <div className="right-menu">
        <Nav navbar>
          {['F', 'G', 'T'].map(item => (
            <NavItem key={item}>
              <Link to="/">{item}</Link>
            </NavItem>
          ))}
          <NavItem>
            <NavLink onClick={this.openSignUpModal}>SignUp</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.openSignInModal}>SignIn</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

  openSignUpModal = () => {
    this.toggleModal();
  };

  openSignInModal = () => {
    this.toggleModalSignIn();
  };

  render() {
    console.log('this.state', this.state);
    return (
      <React.Fragment>
        <div className="header">
          <Navbar color="light" light expand="sm">
            {this.leftSideMenu}
            {this.rightSideMenu}
          </Navbar>
        </div>
        <Modal isOpen={this.state.isOpenModal || this.state.isOpenModalSignIn}>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
            {this.state.isOpenModal && <SignUp toggle={this.toggleModal}/>}
            {this.state.isOpenModalSignIn && <SignIn toggle={this.toggleModalSignIn}/>}
          </ModalBody>
        </Modal>
      </React.Fragment>

    );
  }
}
