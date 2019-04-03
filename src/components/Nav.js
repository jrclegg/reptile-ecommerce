import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  background: ${props => props.theme.colors.default};
  display: block;
`;

const StyledTitle = styled.h2`
  @media (max-width: 768px) {
    font-size: 22px;
    display: inline-block;
  }
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
`;
const NavContainer = styled.div`

`;

const NavMenu = styled.ul`
  @media (max-width: 768px) {
  }
`;
const NavItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 15px;
    padding-bottom: 10px;
  }
`;

const ToggleDiv = styled.div`
  float: right;
  margin: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 30px;
  cursor: pointer;
`;
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showMenu: false
    }
  }
  showMenu() {
      this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    let { showMenu } = this.state
    return (
      <StyledNav>
        <Logo src={placeholder} />
        <StyledTitle>CompareTheReptile.com</StyledTitle>
        <ToggleDiv className="fa fa-bars menu" onClick={(event) => this.showMenu(event)}>
        </ToggleDiv>
        <NavContainer>
            {showMenu &&
            <NavMenu>
              <NavItem to="/frozenfood">Frozen Food</NavItem>
              <NavItem to="/livefood">Livefood</NavItem>
            </NavMenu>
            }
        </NavContainer>
      </StyledNav>
    );
  }
}

export default Nav;
