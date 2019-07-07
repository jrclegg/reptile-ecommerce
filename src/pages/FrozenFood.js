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
        <Link to="/Mice/Pinkies" name="scroll-to-element"><Image src={mouse} alt="mouse"/></Link>
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
        <Link to="Mice/ExtraLargeMice"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Mice/LargeMice">Large Mice</FrozenLink>
        <FrozenLink to="Mice/ExtraLargeMice">Extra Large Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/RatPups"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/RatFuzzies"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/RatPups">Rat Pups</FrozenLink>
        <FrozenLink to="/Rats/RatFuzzies">Rat Fuzzies</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/SmallWeaners"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/LargeWeaners"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/SmallWeaners">Small Weaner Rats</FrozenLink>
        <FrozenLink to="/Rats/LargeWeaners">Large Weaner Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/SmallRats"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/MediumRats"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/SmallRats">Small Rats</FrozenLink>
        <FrozenLink to="/Rats/MediumRats">Medium Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/LargeRats"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rats/ExtraLargeRats"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/LargeRats">Large Rats</FrozenLink>
        <FrozenLink to="/Rats/ExtraLargeRats">Extra Large Rats</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rats/GiantRats"><Image src={mouse} alt="mouse"/>Giant Rats</Link>
        <Link to="/Multis/Small"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rats/GiantRats">Giant Rats</FrozenLink>
        <FrozenLink to="/Multis/Small">Small Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Multis/Large"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Multis/ExtraLarge"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Multis/Large">Large Multimammate Mice</FrozenLink>
        <FrozenLink to="/Multis/ExtraLarge">Extra Large Multimammate Mice</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/MiniGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/GuineaPigs/SmallGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/GuineaPigs/MiniGuineaPigs">Mini Guinea Pigs</FrozenLink>
        <FrozenLink to="/GuineaPigs/SmallGuineaPigs">Small Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/MediumGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/GuineaPigs/LargeGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/GuineaPigs/MediumGuineaPigs">Medium Guinea Pigs</FrozenLink>
        <FrozenLink to="/GuineaPigs/LargeGuineaPigs">Large Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rabbits/DayOldRabbits"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rabbits/MiniRabbits"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rabbits/DayOldRabbits">Day Old Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/MiniRabbits">Mini Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rabbits/SmallRabbits"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rabbits/MediumRabbits"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rabbits/SmallRabbits">Small Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/MediumRabbits">Medium Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rabbits/LargeRabbits"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rabbits/ExtraLargeRabbits"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rabbits/LargeRabbits">Large Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/ExtraLargeRabbits">Extra Large Rabbits</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/Rabbits/GiantRabbits"><Image src={mouse} alt="mouse"/></Link>
        <Link to="/Rabbits/MiniRabbits"><Image src={mouse} alt="mouse"/></Link>
        <FrozenLink to="/Rabbits/GiantRabbits">Giant Rabbits</FrozenLink>
        <FrozenLink to="/Rabbits/MiniRabbits">Small Quail</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/ExtraLargeGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/GuineaPigs/ExtraLargeGuineaPigs">Extra Large Guinea Pigs</FrozenLink>
        <FrozenLink>Small Hamsters</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/ExtraLargeGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/GuineaPigs/ExtraLargeGuineaPigs">Extra Large Guinea Pigs</FrozenLink>
        <FrozenLink>Small Hamsters</FrozenLink>
      </Parent>
      {/* <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink>Large Quail</FrozenLink>
        <FrozenLink>Chicks</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/ExtraLargeGuineaPigs"><Image src={mouse} alt="mouse"/></Link>
        <Image src={mouse} alt="mouse"/>
        <FrozenLink to="/GuineaPigs/ExtraLargeGuineaPigs">Extra Large Guinea Pigs</FrozenLink>
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
      </Parent> */}
      {/* <Parent>
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