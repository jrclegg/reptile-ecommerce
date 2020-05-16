import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import blackCricket from '../../assets/blackcricket.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'

const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    margin-left: 15px;
    grid-template-columns: 1fr 1fr;
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`

class BlackCrickets extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/blackcrickets/micro"><Image src={blackCricket} alt="mouse"/></Link>
        <Link to="/blackcrickets/small"><Image src={blackCricket} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/micro">Micro Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/small">Small  Black Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/blackcrickets/mediumsmall"><Image src={blackCricket} alt="mouse"/></Link>
        <Link to="/blackcrickets/medium"><Image src={blackCricket} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/mediumsmall">Medium Small Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/medium">Medium Black Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/blackcrickets/large"><Image src={blackCricket} alt="mouse"/></Link>
        <Link to="/blackcrickets/extralarge"><Image src={blackCricket} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/large">Large Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/extralarge">Extra Large Black Crickets</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default BlackCrickets