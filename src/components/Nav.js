import React from "react";
import styled from "styled-components";
import placeholder from "../assets/logo4.png";
import { NavLink } from "react-router-dom";
import HeaderSubscribe from './HeaderSubscribe'

const LogoHeader = styled.div`
  background: ${props => props.theme.colors.default};
  display: block;
  padding-bottom: 170px;
  @media (max-width: 768px) {
    padding-bottom: 125px;
  }
`

const Header = styled.div`
  background: ${props => props.theme.colors.default};
  display: block;
  padding-bottom: 20px;
`
const MainTitle = styled.h2`
  font-size: 22px;
  display: inline-block;
  margin-left: 2%;
  color: ${props => props.theme.colors.secondary};
`

const Logo = styled.img`
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-left: 40px;
    width: 300px;
  }
  width: 450px
`

const NavList = styled.ul`
  margin: 0;
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
    margin-top: -14px;
    border: 1px solid ${props => props.theme.colors.default};
    background: #FFFFFF;
    position: absolute;
    top: 50px;
  }
  @media (max-width: 768px) {
    background: #f4f4f4;
    width: 80%;
  }
`
const NavItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  display: block;
  text-align: left;
  padding-bottom: 10px;
  padding-top: 10px;
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
    color: black;
    margin-left: 1px;
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
  color: white;
  margin-right: 25px;
  @media (min-width: 768px) {
   display: none;
  }
`
const Navs = styled.div `
   float: left;
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
      <React.Fragment>
      <LogoHeader>
        <NavLink to="/">
          <Logo alt="logo" src={placeholder} />
        </NavLink>
        <NavToggle id="navToggle" onClick={(event) => this.showMenu(event)}>
          { showMenu !== true ?
              <NavIcon className="fa fa-bars menu"></NavIcon>
              : <NavIcon className="fas fa-times"></NavIcon>
          }
        </NavToggle>
      </LogoHeader>
      <Header>
        <nav>
          { showMenu &&
          <React.Fragment>
             <NavList>
             <NavItem id="about" to="/about">About</NavItem>
            </NavList>
            <NavList>
             <NavItem id="blog" to="/blog">Blog</NavItem>
            </NavList>
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
      </React.Fragment>
    );
  }
}

export default Nav;
