import React, { PureComponent } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
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
        </Nav>
      </div>
    );
  }

  render() {
    return (
      <div className="header">
        <Navbar color="light" light expand="sm">
          {this.leftSideMenu}
          {this.rightSideMenu}
        </Navbar>
      </div>
    );
  }
}
