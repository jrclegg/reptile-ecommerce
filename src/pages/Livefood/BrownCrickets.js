import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import { Link } from "react-router-dom";

const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`

class BrownCrickets extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/browncrickets/micro"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/browncrickets/small"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/micro">Micro Brown Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/small">Small Brown Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/browncrickets/mediumsmall"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/browncrickets/medium"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/mediumsmall">Medium Small Brown Crickets</FrozenLink>
        <FrozenLink to="/browncrickets/medium">Medium Brown Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/browncrickets/large"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/browncrickets/extralarge"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/large">Large Brown Crickets</FrozenLink>
        <FrozenLink to="/browncrickets/extralarge">Extra Large Brown Crickets</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default BrownCrickets