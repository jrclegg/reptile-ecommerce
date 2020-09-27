import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Image from '../components/Image.js'
import mouse from '../assets/mouse.jpg'
import rat from '../assets/rat.jpg'
import browncricket from '../assets/browncricket.jpg'
import locust from '../assets/locust.jpg'
import Footer from '../components/Footer'


const StyledTitle = styled.h2`
    text-align: center;
`
const PopularProducts = styled.div`
    display: flex;
    margin-left: 15px;
`
const LeftDiv = styled.div`
    float:left;
    width:50%;
    overflow:hidden;
`
const RightDiv = styled.div`
    float:left;
    width:50%;
    overflow: hidden;
`
const Parent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Plus = styled.span`
    position: absolute;
    font-size: 30px;
    font-weight: 500;
    margin-top: 10%;
    margin-left: -2.5%;
`

class Home extends React.PureComponent {
    render(){
        return(
            <div>
                {/* <StyledTitle>We Find The Best Value Deals</StyledTitle>
                <Parent>
                    <div>
                        <StyledTitle>25 Large Mice</StyledTitle>
                        <StyledTitle>25 Rat Fuzzies</StyledTitle>
                        <StyledTitle>5 Small Rats</StyledTitle>
                        <StyledTitle>5 Medium Rats</StyledTitle>
                    </div>
                    <div>
                        <StyledTitle>500 Large Silent Brown Crickets</StyledTitle>
                        <StyledTitle>50 Medium Locusts</StyledTitle>
                        <StyledTitle>500 Mealworms</StyledTitle>
                    </div>
                    <div>
                        <StyledTitle>10 Medium Rats</StyledTitle>
                        <StyledTitle>10 Large Rats</StyledTitle>
                        <StyledTitle>5 Medium Rats</StyledTitle>
                    </div>
                </Parent> */}
                {/* <StyledTitle>Top Deals By Store</StyledTitle> */}
                <StyledTitle>Popular Foods</StyledTitle>
                <PopularProducts>
                    <LeftDiv>
                        <StyledTitle>Brown Crickets</StyledTitle>
                        <Link to="/BrownCrickets"><Image src={browncricket} alt="mouse"/></Link>
                        <StyledTitle>Frozen Mice</StyledTitle>
                        <Link to="/Mice"><Image src={mouse} alt="mouse"/></Link>
                    </LeftDiv>
                    <RightDiv>
                        <StyledTitle>Locusts</StyledTitle>
                        <Link to="/Locusts"><Image src={locust} alt="mouse"/></Link>
                        <StyledTitle>Frozen Rats</StyledTitle>
                        <Link to="/Rats"><Image src={rat} alt="mouse"/></Link>
                    </RightDiv>
                </PopularProducts>
                <Footer/>
            </div>
        )
    }
}

export default Home