import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'


const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`

class Mealworms extends React.Component {
  render() {
    return (
    <Parent>
      <Link to="/Locusts/Hatchlings"><Image src={mouse} alt="mouse"/></Link>
      <Link to="/Locusts/Small"><Image src={mouse} alt="mouse"/></Link>
      <FrozenLink to="/Locusts/Hatchlings">Hatchling Locusts</FrozenLink>
      <FrozenLink to="/Locusts/Small">Small Locusts</FrozenLink>
      <Footer/>
    </Parent>
    )
  }
}
export default Mealworms