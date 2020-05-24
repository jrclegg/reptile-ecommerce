import styled from 'styled-components'

const ListingImage = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 90%;
    margin-top: 10px;
    @media only screen and (min-width: 720px) {
        width: 60%;
        margin-left: 15%;;
    }
`

export default ListingImage