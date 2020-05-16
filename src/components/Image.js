import styled from 'styled-components'

const Image = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 92%;
    margin-top: 10px;
    @media only screen and (min-width: 400px){
        height: 25vh;
    }
    @media only screen and (min-width: 600px){
        height: 40vh;
    }
    @media only screen and (min-width: 1024px){
        height: 60vh;
        width: 95%;
    }
`

export default Image
