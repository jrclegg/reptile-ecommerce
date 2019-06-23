import React from 'react'
import {data} from '../../components/GetData';
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

class Rats extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Rats/RatPups"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/RatFuzzies"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/RatPups">Rat Pups</FrozenLink>
        <FrozenLink to="/Rats/RatFuzzies">Rat Fuzzies</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/SmallWeaners"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/LargeWeaners"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/SmallWeaners">Small Weaner Rats</FrozenLink>
        <FrozenLink to="/Rats/LargeWeaners">Large Weaner Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/SmallRats"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/MediumRats"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/SmallRats">Small Rats</FrozenLink>
        <FrozenLink to="/Rats/MediumRats">Medium Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/LargeRats"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/ExtraLargeRats"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/LargeRats">Large Rats</FrozenLink>
        <FrozenLink to="/Rats/ExtraLargeRats">Extra Large Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/GiantRats"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/GiantRats"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/GiantRats">Giant Rats</FrozenLink>
        <FrozenLink to="/Rats/GiantRats">Giant Rats</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default Rats