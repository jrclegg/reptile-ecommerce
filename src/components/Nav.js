import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
    background: ${props => props.theme.colors.default};
    display: flex;
`

const StyledTitle = styled.h2`
    @media (max-width: 768px) {
        font-size: 22px;
    }
`
const Logo = styled.img`
    width: 60px;
    height: 60px;
`
const NavMenu = styled.div`
  float: right;
`
const NavItem = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-left: 20px;
`
const Nav = (props) => (
    <StyledNav>
        <Logo src={placeholder}/>
        <StyledTitle>CompareTheReptile.com</StyledTitle>
        <NavMenu>
            <NavItem>Frozen Food</NavItem>
            <NavItem>Live Food</NavItem>
        </NavMenu>
    </StyledNav>
)

export default Nav