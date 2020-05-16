import React from 'react'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import guineapig from '../../assets/guineapig.jpg'
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

class GuineaPigs extends React.Component {
  render() {
    return (
      <div>
      <Parent>
        <Link to="/GuineaPigs/MiniGuineaPigs"><Image src={guineapig} alt="mouse"/></Link>
        <Link to="/GuineaPigs/SmallGuineaPigs"><Image src={guineapig} alt="mouse"/></Link>
        <FrozenLink to="/GuineaPigs/MiniGuineaPigs">Mini Guinea Pigs</FrozenLink>
        <FrozenLink to="/GuineaPigs/SmallGuineaPigs">Small Guinea Pigs</FrozenLink>
      </Parent>
      <Parent>
        <Link to="/GuineaPigs/MediumGuineaPigs"><Image src={guineapig} alt="mouse"/></Link>
        <Link to="/GuineaPigs/LargeGuineaPigs"><Image src={guineapig} alt="mouse"/></Link>
        <FrozenLink to="/GuineaPigs/MediumGuineaPigs">Medium Guinea Pigs</FrozenLink>
        <FrozenLink to="/GuineaPigs/LargeGuineaPigs">Large Guinea Pigs</FrozenLink>
      </Parent>
      <Footer/>
      </div>
    )
  }
}
export default GuineaPigs