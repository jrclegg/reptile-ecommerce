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
  color: ${props => props.theme.colors.secondary};
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
  float: left;
`

const NavList = styled.ul`
  @media (max-width: 768px) {
    
  }
`
const NavItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: 800;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    text-align: left;
    margin-top: 15px;
    padding-bottom: 10px;
    margin-left: 10px;
  }
`
const NavDropdown = styled(NavItem)`
  @media (max-width: 768px) {
   font-weight: normal;
  }
`
const NavToggle = styled.div`
  float: right;
  margin: 10px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.secondary};
  font-size: 30px;
  cursor: pointer;
  :focus {
    border: solid 1px blue;
  }
`
const NavItemArrow = styled.i`
  float: right;
  margin-right: 30px;
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
        <NavLink to="/">
          <MainTitle>CompareTheReptile.com</MainTitle>
        </NavLink>
        <NavToggle id="navToggle" tabIndex="0" className="fa fa-bars menu" onClick={(event) => this.showMenu(event)}>
        </NavToggle>
        <nav>
          {showMenu &&
            <NavList>
              <NavItem id="frozenFood" tabIndex="1" to="/frozenfood" onClick={(event) => this.toggleDropdown(event)}>
                Frozen Food
                  {
                    showFrozenItems === true ?
                    <React.Fragment>
                      <NavItemArrow className="fas fa-chevron-up" onClick={(event) => this.showMenu(event)}/>
                      <NavDropdown to="/mice">Mice</NavDropdown>
                      <NavDropdown to="/rats">Rats</NavDropdown>
                      <NavDropdown to="/multimammates">Multimammate Mice</NavDropdown>
                      <NavDropdown to="/guineapigs">Guinea Pigs</NavDropdown>
                      <NavDropdown to="/rabbits">Rabbits</NavDropdown>
                      <NavDropdown to="/hamsters">Hamsters</NavDropdown>
                      <NavDropdown to="/gerbils">Gerbils</NavDropdown>
                      <NavDropdown to="/chicks">Chicks</NavDropdown>
                      <NavDropdown to="/quail">Quail</NavDropdown>
                    </React.Fragment>
                    : <NavItemArrow className="fas fa-chevron-down"/>
                  }
              </NavItem>
              <NavItem id="livefood" tabIndex="2" to="/livefood" onClick={(event) => this.toggleDropdown(event)}>
                Livefood
                {
                    showLiveItems === true ? 
                    <React.Fragment>
                      <NavItemArrow className="fas fa-chevron-up"/>
                      <NavDropdown to="/locusts">Locusts</NavDropdown>
                      <NavDropdown to="/browncrickets">Brown Crickets</NavDropdown>
                      <NavDropdown to="/blackcrickets">Black Crickets</NavDropdown>
                    </React.Fragment>
                    : <NavItemArrow className="fas fa-chevron-down"/>
                }
              </NavItem>
            </NavList>
          }
        </nav>
      </Header>
    );
  }
}

export default Nav;
