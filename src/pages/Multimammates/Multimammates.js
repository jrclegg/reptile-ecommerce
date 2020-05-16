import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import multimammate from '../../assets/multimammate.jpg'
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

class Multimammates extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <FrozenLink to="/Multis/Small"><Image src={multimammate} alt="mouse"/>Small Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/Large"><Image src={multimammate} alt="mouse"/>Large Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multis/ExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large Multimammate Mice</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Multimammates