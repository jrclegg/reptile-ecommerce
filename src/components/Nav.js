import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.png";
import { NavLink } from "react-router-dom";
// import {scroller} from 'react-scroll';

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
  margin-top: -30px;
  color: white;
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
        <NavLink to="/basket">
          <BasketIcon className="fas fa-shopping-cart">
            
          </BasketIcon>
        </NavLink>
        <NavToggle id="navToggle" tabIndex="0" onClick={(event) => this.showMenu(event)}>
          { showMenu !== true ?
          <NavIcon className="fa fa-bars menu"></NavIcon>
          : <NavIcon className="fas fa-times"></NavIcon>
          }
        </NavToggle>
        <nav>
          {showMenu &&
            <NavList>
              <NavItem id="frozenFood" tabIndex="1" to="/frozenfood" onClick={(event) => this.toggleDropdown(event)}>
                Frozen Food
              </NavItem>
              {
                    showFrozenItems === true ?
                    <React.Fragment>
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
                    </React.Fragment>
                    : <NavItemArrow className="fas fa-chevron-down"/>
                  }
              <NavItem id="livefood" tabIndex="2" to="/livefood" onClick={(event) => this.toggleDropdown(event)}>
                Livefood
              </NavItem>
              {
                showLiveItems === true ? 
                <React.Fragment>
                  <NavItemArrow className="fas fa-chevron-up"/>
                  <NavDropdown url="/locusts" productTitle="Locusts"/>
                  <NavDropdown url="/browncrickets" productTitle="Brown Crickets"/>
                  <NavDropdown url="/blackcrickets" productTitle="Black Crickets"/>
                </React.Fragment>
                : <NavItemArrow className="fas fa-chevron-down"/>
              }
            </NavList>
          }
        </nav>
      </Header>
    );
  }
}

export default Nav;
