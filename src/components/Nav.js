import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import { NavLink } from "react-router-dom";
import HeaderSubscribe from './HeaderSubscribe'

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
  @media (min-width: 768px) {
    padding-bottom: 20px;
    position: relative;
    display: inline-block;
  }
`
const SubMenu = styled.ul`
padding-top: 8px;
  @media (min-width: 768px) {
    display: none;
    border: 1px solid ${props => props.theme.colors.default};;
    background: #FFFFFF;
    position: absolute;
    top: 50px;
  }
`
const NavItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  cursor: pointer;
  margin-left: 45px;
  display: block;
  text-align: left;
  margin-top: 15px;
  padding-bottom: 10px;
  margin-left: 30px;
  @media only screen and (min-width: 768px) {
    display: block;
    top: 100px;
    cursor: pointer;
    &:hover ${SubMenu} {
      display: block;
    }
    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
`
const BasketLink = styled(NavLink)`
  @media only screen and (min-width: 768px) {
    float: right;
    margin-top: 15px;
    margin-right: 40px;
  }
`
const NavIcon = styled.i`
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
const BasketIcon = styled.i`
  font-size: 28px;
  margin-left: 15%;

`
const NavItemDropdown = styled(NavItem)`
  font-weight: bold;
  display: block;
  color: black;
  margin-left: -20px;
  margin-right: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: white;
  }
  @media (min-width: 769px) {
    margin-top: 0px;
    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.colors.default};
    }
  }

  @media (max-width: 768px) {
    position: relative;
    margin-top: 15px;
    color: white;
    margin-left: -40px;
    text-align: left;
    text-decoration: none;
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
  @media (min-width: 768px) {
    display: none;
   }
`
const NavItemArrow = styled.i`
  float: right;
  margin-right: 30px;
  color: white;
   @media (min-width: 768px) {
    display: none;
   }
`

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showMenu: true,
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

  hideDropdown(){
    this.setState({showFrozenItems: false, showLiveItems: false})
  }

  render() {
    let { showMenu, showFrozenItems, showLiveItems} = this.state
    const NavDropdown = props => {
      return <NavItemDropdown 
                to={props.url} 
                onClick={(event)=>this.hideDropdown(event)}
              >{props.productTitle}</NavItemDropdown>;
    }
    return (
      <Header>
        <Logo alt="logo" src={placeholder} />
        <NavLink to="/">
          <MainTitle>CompareTheReptile.com</MainTitle>
        </NavLink>
        <NavToggle id="navToggle" onClick={(event) => this.showMenu(event)}>
          { showMenu !== true ?
              <NavIcon className="fa fa-bars menu"></NavIcon>
              : <NavIcon className="fas fa-times"></NavIcon>
          }
        </NavToggle>
        <nav>
          { showMenu &&
          <React.Fragment>
            <NavList>
              <NavItem id="frozenFood" to="/frozenfood" onClick={(event) => this.toggleDropdown(event)}>
                Frozen Food
              {
                    showFrozenItems === true ?
                    <SubMenu>
                      <NavItemArrow className="fas fa-chevron-up"/>
                        <NavDropdown url="/mice" productTitle="Mice" />
                        <NavDropdown url="/rats" productTitle="Rats"/>
                        <NavDropdown url="/multimammates" productTitle="Multimammates"/>
                        <NavDropdown url="/guineapigs" productTitle="Guinea Pigs"/>
                        <NavDropdown url="/rabbits" productTitle="Rabbits"/>
                        <NavDropdown url="/hamsters" productTitle="Hamsters"/>
                        <NavDropdown url="/gerbils" productTitle="Gerbils"/>
                        <NavDropdown url="/chicks" productTitle="Chicks"/>
                        <NavDropdown url="/quail" productTitle="Quail"/>
                    </SubMenu>
                    : <NavItemArrow className="fas fa-chevron-down"/>
                  }
              </NavItem>
              </NavList>
              <NavList>
              <NavItem id="livefood" to="/livefood" onClick={(event) => this.toggleDropdown(event)}>
                Livefood
              {
                showLiveItems === true ? 
                <SubMenu>
                  <NavItemArrow className="fas fa-chevron-up"/>
                  <NavDropdown url="/locusts" productTitle="Locusts"/>
                  <NavDropdown url="/browncrickets" productTitle="Brown Crickets"/>
                  <NavDropdown url="/blackcrickets" productTitle="Black Crickets"/>
                  <NavDropdown url="/mealworms" productTitle="Mealworms"/>
                  <NavDropdown url="/waxworms" productTitle="Waxworms"/>
                </SubMenu>
                : <NavItemArrow className="fas fa-chevron-down"/>
              }
               </NavItem>
            </NavList>
              <HeaderSubscribe/>
            </React.Fragment>
          }
        </nav>
      </Header>
    );
  }
}

export default Nav;
