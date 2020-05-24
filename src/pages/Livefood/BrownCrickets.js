import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import brownCricket from '../../assets/browncricket.jpg'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import MainTitle from '../../components/MainTitle.js';

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

class BrownCrickets extends React.Component {
  render() {
    return (
      <div>
        <MainTitle>Brown Crickets</MainTitle>
      <Parent>
        <Link to="/browncrickets/micro"><Image src={brownCricket} alt="mouse"/></Link>
        <Link to="/browncrickets/small"><Image src={brownCricket} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/micro">Micro Brown Crickets</FrozenLink>
        <FrozenLink to="/blackcrickets/small">Small Brown Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/browncrickets/mediumsmall"><Image src={brownCricket} alt="mouse"/></Link>
        <Link to="/browncrickets/medium"><Image src={brownCricket} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/mediumsmall">Medium Small Brown Crickets</FrozenLink>
        <FrozenLink to="/browncrickets/medium">Medium Brown Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/browncrickets/standard"><Image src={brownCricket} alt="mouse"/></Link>
        <Link to="/browncrickets/standard"><Image src={brownCricket} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/standard">Standard Brown Crickets</FrozenLink>
        <FrozenLink to="/browncrickets/standard">Standard Brown Crickets</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/browncrickets/large"><Image src={brownCricket} alt="mouse"/></Link>
        <Link to="/browncrickets/extralarge"><Image src={brownCricket} alt="mouse"/></Link>
        <FrozenLink to="/browncrickets/large">Large Brown Crickets</FrozenLink>
        <FrozenLink to="/browncrickets/extralarge">Extra Large Brown Crickets</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default BrownCrickets