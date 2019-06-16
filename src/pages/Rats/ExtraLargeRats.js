
import React from 'react';
import mouse from '../../assets/mouseother.jpg'
import {Image, 
    QuantityDescription, QuantityTitle, 
    QuantityInput, BasketButton, 
    Parent, MainTitle, getProducts} from './../../components/index'

const ExtraLargeRatsList = ({ products}) => (
    products.map((item) =>
        <div key={item.id}>
            {item.product_name === "Extra Large Rats" ?
                <React.Fragment>
                    <MainTitle>{item.product_name}</MainTitle>
                    <Parent>
                        <Image src={mouse}></Image>
                    </Parent>
                    {item.packs.map(pack =>
                        <div key={pack.quantity}>
                            <QuantityTitle>Pack of {pack.quantity}</QuantityTitle>
                            {pack.retailers
                                .sort((a,b) => a.price - b.price)
                                .map(retailer =>
                                    <div key={retailer.company_id}>
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

const ExtraLargeRats = getProducts(ExtraLargeRatsList)

export default ExtraLargeRats
