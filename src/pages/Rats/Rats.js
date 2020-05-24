import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import rat from '../../assets/rat.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import MainTitle from '../../components/MainTitle';


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

class Rats extends React.Component {
  render() {
    return (
      <div>
        <MainTitle>Rats</MainTitle>
      <Parent>
        <FrozenLink to="/Rats/RatPups"><Image src={rat} alt="mouse"/>Rat Pups</FrozenLink>
        <FrozenLink to="/Rats/RatFuzzies"><Image src={rat} alt="mouse"/>Rat Fuzzies</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rats/SmallWeaners"><Image src={rat} alt="mouse"/>Small Weaner Rats</FrozenLink>
        <FrozenLink to="/Rats/LargeWeaners"><Image src={rat} alt="mouse"/>Large Weaner Rats</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rats/SmallRats"><Image src={rat} alt="mouse"/>Small Rats</FrozenLink>
        <FrozenLink to="/Rats/MediumRats"><Image src={rat} alt="mouse"/>Medium Rats</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rats/LargeRats"><Image src={rat} alt="mouse"/>Large Rats</FrozenLink>
        <FrozenLink to="/Rats/ExtraLargeRats"><Image src={rat} alt="mouse"/>Extra Large Rats</FrozenLink>
      </Parent>
      <Parent>
        <FrozenLink to="/Rats/GiantRats"><Image src={rat} alt="mouse"/>Giant Rats</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default Rats