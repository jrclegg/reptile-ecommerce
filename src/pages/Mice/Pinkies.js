import React from 'react'
import {data} from '../../components/GetData';
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'

const MainTitle = styled.h2`
    text-align: center;
`
const SubTitle = styled.h3`
    text-align: center;
`
const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr;
`

class Pinkies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           products: []
        }
      }
    
      componentDidMount() {
        data().then(data=>{ 
          this.setState({
            products: data.products
          })
        });
      }
    
    render() {
        this.items = this.state.products.map((item, key) =>
        <div key={item.id}>
        <MainTitle>{item.product_name}</MainTitle>
        {console.log(item)}
        <Parent>
            <Image src={mouse}></Image>
        </Parent>
        <div>
            <div>
                <button>All</button>
                <button>Single</button>
                <button>Pack of 10</button>
                <button>Pack of 25</button>
                <button>Pack of 100</button>
            </div>
            <SubTitle>{item.product_name} (Single)</SubTitle>
            {item.retailers.map(retailer =>
                <ul>
                    {
                        retailer.packs.map(pack => 
                            pack.quantity === 1 ?
                            <div>
                                <h4 key={pack.id}>{retailer.company_name}</h4>
                                {pack.price}
                            </div>
                            : ''
                    )}
                </ul>
            )}
        </div>
        <div>
            <SubTitle>{item.product_name} (Pack of 10)</SubTitle>
            {item.retailers.map(retailer =>
                <ul>
                    {
                        retailer.packs.map(pack => 
                            pack.quantity === 10 ?
                            <div>
                                <h4 key={pack.id}>{retailer.company_name}</h4>
                                {pack.price}
                            </div>
                            : ''
                    )}
                </ul>
            )}
        </div>
        <div>
            <SubTitle>{item.product_name} (Pack of 25)</SubTitle>
            {item.retailers.map(retailer =>
                <ul>
                    {
                        retailer.packs.map(pack => 
                            pack.quantity === 25 ?
                            <div>
                                <h4 key={pack.id}>{retailer.company_name}</h4>
                                {pack.price}
                            </div>
                            : ''
                    )}
                </ul>
            )}
        </div>
        <div>
            <SubTitle>{item.product_name} (Pack of 100)</SubTitle>
            {item.retailers.map(retailer =>
                <ul>
                    {
                        retailer.packs.map(pack => 
                            pack.quantity === 100 ?
                            <div>
                                <h4 key={pack.id}>{retailer.company_name}</h4>
                                {pack.price}
                            </div>
                            : ''
                    )}
                </ul>
            )}
        </div>
        </div>
        );
        return (
            <div>
                {this.items[0]}
            </div>
        )
    }
}
export default Pinkies