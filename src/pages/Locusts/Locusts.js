import React from 'react'
import {data} from '../../../components/GetData';
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

class Locusts extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Locusts/Hatchlings"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Locusts/Small"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/Hatchlings">Hatchling Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Small">Small Locusts</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Locusts/Medium"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Locusts/Large"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/Medium">Medium Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Large">Large Locusts</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Locusts/ExtraLarge"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Locusts/Adult"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Locusts/ExtraLarge">Extra Large Locusts</FrozenLink>
        <FrozenLink to="/Locusts/Adult">Adult Locusts</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default Locusts