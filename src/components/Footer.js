import React from "react";
import styled from "styled-components";
import Subscribe from './Subscribe'

const FooterNav = styled.div`
  background: ${props => props.theme.colors.default};
  display: block;
  padding-bottom: 170px;
`

const Wrapper = styled.div`
    float: right;
    margin-top: 165px;
`

class Footer extends React.Component {
  render() {
    return (
        <FooterNav>
            <Wrapper>
                <Subscribe/>
            </Wrapper>
        </FooterNav>
    );
  }
}

export default Footer;
