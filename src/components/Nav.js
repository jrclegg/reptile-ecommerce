import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import { NavLink } from "react-router-dom";

const Header = styled.div`
  background: ${props => props.theme.colors.default};
  display: block;
`
const MainTitle = styled.h2`
  font-size: 22px;
  display: inline-block;
  margin-left: 2%;
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
  float: left;
`
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
`
const NavToggle = styled.div`
  float: right;
  margin: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 30px;
  cursor: pointer;
  :focus {
    border: solid 1px blue;
  }
`
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showMenu: false,
       showFrozenItems: false,
       showLiveItems: false
    }
  }
  
  showMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleDropdown(event) {
    if (event.target.id === 'frozenFood'){
      this.setState({ showFrozenItems: !this.state.showFrozenItems });
    } else if (event.target.id === 'livefood'){
      this.setState({ showLiveItems: !this.state.showLiveItems });
    }
  }
  render() {
    let { showMenu, showFrozenItems, showLiveItems } = this.state
    return (
      <Header>
        <Logo alt="logo" src={placeholder} />
        <MainTitle>CompareTheReptile.com</MainTitle>
        <NavToggle id="navToggle" tabIndex="0" className="fa fa-bars menu" onClick={(event) => this.showMenu(event)}>
        </NavToggle>
        <nav>
          {showMenu &&
            <ul>
              <NavItem id="frozenFood" tabIndex="1" to="/frozenfood" onClick={(event) => this.toggleDropdown(event)}>
                Frozen Food
                  {
                    showFrozenItems &&
                    <React.Fragment>
                      <NavItem to="/mice">Mice</NavItem>
                      <NavItem to="/rats">Rats</NavItem>
                      <NavItem to="/multimammates">Multimammate Mice</NavItem>
                      <NavItem to="/guineapigs">Guinea Pigs</NavItem>
                      <NavItem to="/rabbits">Rabbits</NavItem>
                    </React.Fragment>
                  }
              </NavItem>
              <NavItem id="livefood" tabIndex="2" to="/livefood" onClick={(event) => this.toggleDropdown(event)}>
                Livefood
                {
                    showLiveItems &&
                    <React.Fragment>
                      <NavItem to="/locusts">Locusts</NavItem>
                      <NavItem to="/browncrickets">Brown Crickets</NavItem>
                      <NavItem to="/blackcrickets">Black Crickets</NavItem>
                    </React.Fragment>
                }
              </NavItem>
            </ul>
          }
        </nav>
      </Header>
    );
  }
}

export default Nav;
