import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import multimammate from '../../assets/multimammate.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import MainTitle from '../../components/MainTitle'

const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    margin-left: 15px;
    grid-template-columns: 1fr 1fr;
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
  @media only screen and (min-width: 720px) {
    font-size: 26px;
  }
`

class Multimammates extends React.Component {
  render() {
    return (
      <div>
        <MainTitle>Multimammate Mice</MainTitle>
      <Parent>
      <FrozenLink to="/Multis/ExtraSmall"><Image src={multimammate} alt="mouse"/>Extra Small Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/Small"><Image src={multimammate} alt="mouse"/>Small Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multis/Medium"><Image src={multimammate} alt="mouse"/>Medium Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/Large"><Image src={multimammate} alt="mouse"/>Large Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multis/ExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/ExtraExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large (2) Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multis/ExtraExtraExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large (3) Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/ExtraExtraExtraExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large(4) Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multis/ExtraExtraExtraExtraExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large (5) Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/ExtraExtraExtraExtraExtraExtraLarge"><Image src={multimammate} alt="mouse"/>Extra Large (6) Multimammate Mice</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Multimammates