import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouse.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'

const Parent = styled.div`
    display: grid;
    margin-left: 15px;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`

class Mice extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Mice/Pinkies"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/LargePinkies"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/Pinkies">Pinkies</FrozenLink>
        <FrozenLink to="/Mice/LargePinkies">Large Pinkies</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/Fuzzies"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/Hoppers"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/Fuzzies">Fuzzies</FrozenLink>
        <FrozenLink to="/Mice/Hoppers">Hoppers</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/SmallMice"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/MediumMice"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/SmallMice">Small Mice</FrozenLink>
        <FrozenLink to="/Mice/MediumMice">Medium Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/LargeMice"><Image src={mouse} alt="mouse"/></Link>
        <Link to="Mice/ExtraLargeMice"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/LargeMice">Large Mice</FrozenLink>
        <FrozenLink to="Mice/ExtraLargeMice">Extra Large Mice</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Mice