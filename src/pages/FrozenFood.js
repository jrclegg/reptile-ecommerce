import React from 'react'
import {data} from '../components/GetData';
import styled from 'styled-components'
import Image from '../components/Image.js'
import mouse from '../assets/mouseother.jpg'
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

class FrozenFood extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/Mice/Pinkies"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/LargePinkies"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/Pinkies">Pinkies</FrozenLink>
        <FrozenLink to="/Mice/LargePinkies">Large Pinkies</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/Hoppers.js"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/Fuzzies">Fuzzies</FrozenLink>
        <FrozenLink to="/Mice/Hoppers">Hoppers</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/SmallMice"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Mice/MediumMice"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/SmallMice">Small Mice</FrozenLink>
        <FrozenLink to="/Mice/MediumMice">Medium Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Mice/LargeMice"><Image src={mouse} alt="mouse"/></Link>
        <Link to="Mice/ExtraLargeMice.js"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/LargeMice">Large Mice</FrozenLink>
        <FrozenLink to="Mice/ExtraLargeMice.js">Extra Large Mice</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/Rats/RatPups">Rat Pups</FrozenLink>
        <FrozenLink to="/Rats/RatFuzzies">Rat Fuzzies</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/Rats/SmallWeaners">Small Weaner Rats</FrozenLink>
        <FrozenLink to="/Rats/LargeWeaners">Large Weaner Rats</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/Rats/SmallRats">Small Rats</FrozenLink>
        <FrozenLink to="/Rats/LargeRats">Large Rats</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/Rats/ExtraLargeRats">Extra Large Rats</FrozenLink>
        <FrozenLink to="/Rats/GiantRats">Giant Rats</FrozenLink>
      </Parent>
      {/* <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Small Multimammate Mice</FrozenLink>
        <FrozenLink>Large Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Extra Large Multimammate Mice</FrozenLink>
        <FrozenLink>Giant Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Mini Guinea Pigs</FrozenLink>
        <FrozenLink>Small Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Medium Guinea Pigs</FrozenLink>
        <FrozenLink>Large Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Extra Large Guinea Pigs</FrozenLink>
        <FrozenLink>Small Hamsters</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Large Hamsters</FrozenLink>
        <FrozenLink>Extra Large Hamsters</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Medium Gerbils</FrozenLink>
        <FrozenLink>Extra Large Gerbils</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Day Old Rabbits</FrozenLink>
        <FrozenLink>Mini Rabbits</FrozenLink>
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
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Large Quail</FrozenLink>
        <FrozenLink>Chicks</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Chickens</FrozenLink>
        <FrozenLink>Extra Large Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Small Edible Frogs Legs</FrozenLink>
        <FrozenLink>Large Edible Frogs Legs</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Medium Wild Rabbits</FrozenLink>
        <FrozenLink>Large Wild Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Woodpigeons</FrozenLink>
        <FrozenLink>Layer Ducks</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Small Degus</FrozenLink>
        <FrozenLink>Medium Degus</FrozenLink>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Large Degus</FrozenLink>
      </Parent> */}
      </div>
    )
  }
}
export default FrozenFood