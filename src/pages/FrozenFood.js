import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image.js'
import mouse from '../assets/mouse.jpg'
import rat from '../assets/rat.jpg'
import guineapig from '../assets/guineapig.jpg'
import multimammate from '../assets/multimammate.jpg'
import rabbit from '../assets/rabbit.jpg'
import hamster from '../assets/hamster.jpg'
import gerbil from '../assets/gerbil.jpg'
import chick from '../assets/chick.jpg'
import quail from '../assets/quail.jpg'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'

const Parent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-height: 100%; 
`
const FrozenLink = styled(Link)`
  font-size: 20px;
  text-align: center;
`
const tallImageStyle = `
  height: 30vh;
`

class FrozenFood extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <FrozenLink to="/Mice"><Image src={mouse} alt="mouse"/>Mice</FrozenLink>
        <FrozenLink to="/Rats" name="scroll-to-element"><Image src={rat} alt="mouse"/>Rats</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Multimammates"><Image src={multimammate} alt="mouse"/>Multimammates</FrozenLink>
        <FrozenLink to="/GuineaPigs"><Image src={guineapig} alt="guineapig"/>Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rabbits"><Image src={rabbit} alt="mouse"/>Rabbits</FrozenLink>
        <FrozenLink to="/Hamsters"><Image src={hamster} alt="mouse"/>Hamsters</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Gerbils"><Image src={gerbil} alt="mouse"/>Gerbils</FrozenLink>
        <FrozenLink to="/Chicks"><Image src={chick} alt="mouse"/>Chicks</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Quail"><Image src={quail} alt="mouse"/>Quail</FrozenLink>
      </Parent>
      <Footer></Footer>
      </div>
    )
  }
}
export default FrozenFood