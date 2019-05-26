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

class Multimammates extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Multis/Small"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Multis/Large"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Multis/Small">Small Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/Large">Large Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Multis/ExtraLarge"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Multis/ExtraLarge">Extra Large Multimammate Mice</FrozenLink>
      </Parent>
      </div>
    )
  }
}
export default Multimammates