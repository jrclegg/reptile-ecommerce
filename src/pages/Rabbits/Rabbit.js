import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import rabbit from '../../assets/rabbit.jpg'
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

class Rabbits extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <FrozenLink to="/Rabbits/DayOldRabbits"><Image src={rabbit} alt="mouse"/>Day Old Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/MiniRabbits"><Image src={rabbit} alt="mouse"/>Mini Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rabbits/SmallRabbits"><Image src={rabbit} alt="mouse"/>Small Rabbits</FrozenLink>
        <FrozenLink  to="/Rabbits/MediumRabbits"><Image src={rabbit} alt="mouse"/>Medium Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rabbits/LargeRabbits"><Image src={rabbit} alt="mouse"/>Large Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/ExtraLargeRabbits"><Image src={rabbit} alt="mouse"/>Extra Large Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rabbits/GiantRabbits"><Image src={rabbit} alt="mouse"/>Giant Rabbits</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Rabbits