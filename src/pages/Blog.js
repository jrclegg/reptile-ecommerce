import React from 'react';
import styled from 'styled-components';
import royal from '../assets/royalpython.jpg';
import Image from '../components/Image'


const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div`
    max-width: 950px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
const RoyalPythonImage = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 100%;
    margin-top: 10px;
    @media only screen and (min-width: 400px){
        height: 40vh;
    }
    @media only screen and (min-width: 600px){
        height: 60vh;
    }
    @media only screen and (min-width: 800px){
        height: 70vh;
        width: 90%;
    }
`

const Amazon = () => (
    <Block>
    <h1>Got a Fussy Male or Juvenile Royal Python?</h1>
    <p>Royal Pythons in captivity are known for their picky attitude to their food.</p>
    <p>How many times have you tried to feed your snake at night and heated up that rat or mouse for it still be there in the morning? </p>
    <RoyalPythonImage src={royal} alt="royalpython"/>  

    <h3>Wild Juvenile and Male Royals of all sizes prefer birds</h3>

    <p>Not much is known about the feeding habits of Royal Pythons in the wild other than they are typically generalist and prey on birds and mammals.</p>
    <p>However, the one study to have looked at the feeding behaviour of Royals in the wild found some interesting results.</p>
    <p>The study looked at the feeding habits of wild Royal Pythons from Nigeria.</p>
    <p>Although both males and female wild royals ate birds and mammals, major differences were found between the eating habits of juveniles (animals below 70cm) and adults (above 100cm) and between males and females.</p>
    <p>Juveniles ate almost entirely small sized birds whereas adults ate mostly small mammals.</p>
    <p>In addition, both adult and juvenile male Royals preferred a diet of birds, suggesting that they are more arboreal in nature than adult females.</p>

    <p>This is the only study to have looked at the diet of wild Royal Pythons and the 
      results come from a sample of 60 snakes so its too big of an assumption to change the diet of your 
      juvenile or Male Royal to birds and set it up like a Green Tree Python but its information worth knowing if you're a keeper 
      of Royal Pythons.</p>
    </Block>
)

function Blog() {
  return (
      <Wrap>
      <Primary>        
        <Amazon/>
      </Primary>
      </Wrap>     
  );
}

export default Blog;