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

class LargePinkies extends React.Component {
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
                    <div>
                        <button>All</button>
                        <button>Single</button>
                        <button>Pack of 10</button>
                        <button>Pack of 25</button>
                        <button>Pack of 100</button>
                    </div>
                    <SubTitle>{item.product_name} (Single)</SubTitle>
                    {item.packs.map(pack =>
                        <ul>
                            {pack.retailers
                                .sort((a,b) => a.price - b.price)
                                .map(retailer => <li>{retailer.company_name}{retailer.price}</li>)
                            }
                        </ul>
                    )}
                </div>
            </div>
        );
        return (
            <div>
                {this.items[1]}
            </div>
        )
    }
}
export default LargePinkies