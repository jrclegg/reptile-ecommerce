import React from 'react'
import styled from 'styled-components'
import Image from '../../../components/Image'
import mouse from '../../../assets/mouseother.jpg'
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

class BlackCrickets extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/blackcrickets/micro"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/blackcrickets/small"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/micro">Micro Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/small">Small  Black Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/blackcrickets/mediumsmall"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/blackcrickets/medium"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/mediumsmall">Medium Small Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/medium">Medium Black Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/blackcrickets/large"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/blackcrickets/extralarge"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/blackcrickets/large">Large Black Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/extralarge">Extra Large Black Crickets</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default BlackCrickets