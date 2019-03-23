import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Image from '../components/Image.js'
import mouse from '../assets/mouseother.jpg'

const StyledTitle = styled.h2`
    text-align: center;
    font-size: 20px;
`
const PopularProducts = styled.div`
    display: flex;
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
                <Nav/>
                <StyledTitle>We Find The Best Deals For All Your Reptile Supplies</StyledTitle>
                <Parent>
                    <div>
                        <Image src={mouse} alt="mouse"/>
                        <StyledTitle>25 Medium Mice</StyledTitle>
                    </div>
                    <div>
                        <Plus>+</Plus>
                        <Image src={mouse} alt="mouse"/>
                        <StyledTitle>10 Large Rats</StyledTitle>
                    </div>  
                    <div>
                        <Plus>+</Plus>
                        <Image src={mouse} alt="mouse"/>
                        <StyledTitle>10 Weaner Rats</StyledTitle>
                    </div>
                </Parent>
                <StyledTitle>Popular Foods</StyledTitle>
                <PopularProducts>
                    <LeftDiv>
                        <StyledTitle>Frozen Mice</StyledTitle>
                        <Image src={mouse} alt="mouse"/>
                        <StyledTitle>Crickets</StyledTitle>
                        <Image src={mouse} alt="mouse"/>
                    </LeftDiv>
                    <RightDiv>
                        <StyledTitle>Frozen Rats</StyledTitle>
                        <Image src={mouse} alt="mouse"/>
                        <StyledTitle>Mealworms</StyledTitle>
                        <Image src={mouse} alt="mouse"/>
                    </RightDiv>
                </PopularProducts>
            </div>
        )
    }
}

export default Home