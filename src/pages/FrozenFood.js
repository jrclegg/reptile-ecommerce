import React from 'react'
import {data} from '../components/GetData';
import styled from 'styled-components'
import Image from '../components/Image.js'
import mouse from '../assets/mouseother.jpg'

const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
`

class FrozenFood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       products: []
    }
  }

  componentDidMount() {
    data().then(data=>{ 
      this.setState({
        products: data
      })
    });
  }
  render() {
    return (
      <div>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      <Parent>
        <Image src={mouse} alt="mouse"/>
        <Image src={mouse} alt="mouse"/>
      </Parent>
      </div>
    )
  }
}
export default FrozenFood