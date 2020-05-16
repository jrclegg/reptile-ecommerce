import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import locust from '../../assets/locust.jpg'
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

class Locusts extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Locusts/Hatchlings"><Image src={locust} alt="mouse"/></Link>
        <Link to="/Locusts/Small"><Image src={locust} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/Hatchlings">Hatchling Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Small">Small Locusts</FrozenLink>
      </Parent>
      <Parent>
        <Link name="scroll-to-element" to="/Locusts/Medium"><Image src={locust} alt="mouse"/></Link>
        <Link to="/Locusts/Large"><Image src={locust} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/Medium">Medium Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Large">Large Locusts</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Locusts/ExtraLarge"><Image src={locust} alt="mouse"/></Link>
        <Link to="/Locusts/Adult"><Image src={locust} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/ExtraLarge">Extra Large Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Adult">Adult Locusts</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Locusts