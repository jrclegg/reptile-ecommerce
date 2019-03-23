import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/placeholder.png'

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

const Nav = (props) => (
    <StyledNav>
        <Logo src={placeholder}/>
        <StyledTitle>CompareTheReptile.com</StyledTitle>
    </StyledNav>
)

export default Nav