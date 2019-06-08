
import React from 'react';
import getProducts from './../../components/Product'
import styled from 'styled-components'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import QuantityTitle from '../../components/QuantityTitle'
import QuantityDescription from '../../components/QuantityDescription'
import QuantityInput from '../../components/QuantityInput'
import BasketButton from '../../components/BasketButton'

const MainTitle = styled.h2`
    text-align: center;
`
const Parent = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: 1fr;
`

const SmallMiceList = ({ products}) => (
    products.map((item, key) =>
        <div key={item.id}>
            {item.product_name === "Small Mice" ?
                <React.Fragment>
                    <MainTitle>{item.product_name}</MainTitle>
                    <Parent>
                        <Image src={mouse}></Image>
                    </Parent>
                    {item.packs.map(pack =>
                        <div>
                            <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                            {pack.retailers
                                .sort((a,b) => a.price - b.price)
                                .map(retailer =>
                                    <div>
                                        <QuantityDescription>{retailer.company_name}<br/><br/>{retailer.price.toFixed(2)}<QuantityInput/><BasketButton>Add To Basket</BasketButton></QuantityDescription>
                                    </div>
                                )
                            }
                        </div>
                    )}
                </React.Fragment>
                : ''
            }
        </div>
    )
);

const SmallMice = getProducts(SmallMiceList)

export default SmallMice
