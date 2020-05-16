import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image.js'
import mouse from '../assets/mouseother.jpg'
import locust from '../assets/locust.jpg'
import brownCricket from '../assets/browncricket.jpg'
import blackCricket from '../assets/blackcricket.jpg'
import mealworms from '../assets/mealworms.jpg'
import waxworms from '../assets/waxworms.jpg'
import Footer from '../components/Footer'


import { Link } from "react-router-dom";

const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
`
const LivefoodLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`

class Livefood extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <LivefoodLink to="/Locusts" name="scroll-to-element"><Image src={locust} alt="mouse"/>Locusts</LivefoodLink>
        <LivefoodLink to="/BrownCrickets"><Image src={brownCricket} alt="mouse"/>Brown Crickets</LivefoodLink>
      </Parent>
      <Parent>
        <LivefoodLink to="/BlackCrickets"><Image src={blackCricket} alt="mouse"/>Black Crickets</LivefoodLink>
        <LivefoodLink to="/Mealworms"><Image src={mealworms} alt="mouse"/>Mealworms</LivefoodLink>
      </Parent>
      <Parent>
        <LivefoodLink to="/Waxworms"><Image src={waxworms} alt="mouse"/>Waxworms</LivefoodLink>
      </Parent>
      <Footer></Footer>
      </div>
    )
  }
}
export default Livefood