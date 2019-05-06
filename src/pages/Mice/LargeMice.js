import React from 'react'
import {data} from '../../components/GetData';
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import QuantityTitle from '../../components/QuantityTitle'
import QuantityDescription from '../../components/QuantityDescription'


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

class LargeMice extends React.Component {
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
                <Parent>
                    <Image src={mouse}></Image>
                </Parent>
                <div>
                    {item.packs.map(pack =>
                        <div>
                            <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                            {pack.retailers
                                .sort((a,b) => a.price - b.price)
                                .map(retailer =>
                                    <div>
                                        <QuantityDescription>{retailer.company_name} {retailer.price.toFixed(2)}</QuantityDescription>
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        );
        return (
            <div>
                {this.items[6]}
            </div>
        )
    }
}
export default LargeMice