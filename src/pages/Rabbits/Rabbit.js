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

class Rabbits extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Rabbits/DayOldRabbits"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rabbits/MiniRabbits"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rabbits/DayOldRabbits">Day Old Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/MiniRabbits">Mini Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Small Rabbits</FrozenLink>
        <FrozenLink>Medium Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Large Rabbits</FrozenLink>
        <FrozenLink>Extra Large Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Giant Rabbits</FrozenLink>
        <FrozenLink>Small Quail</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default Rabbits