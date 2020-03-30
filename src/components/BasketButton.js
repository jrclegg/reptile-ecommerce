import styled from 'styled-components'

const BasketButton = styled.button`
   width: 170px;
   height: 45px;
   display: inline-block;
   margin-left: 40px;
   @media only screen and (min-width: 720px) {
      width: 230px;
      height: 70px;
      margin-bottom: 20px;
      margin-right: 10px;
    }
    @media only screen and (min-width: 1024px) {
      width: 300px;
      margin-left: 60px;
    }
`

export default BasketButton
