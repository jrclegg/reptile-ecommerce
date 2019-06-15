import React from 'react';
import mouse from '../../assets/mouseother.jpg'
import {Image, 
    QuantityDescription, QuantityTitle, 
    QuantityInput, BasketButton, 
    Parent, MainTitle, getProducts} from './../../components/index'

const MiniGuineaPigList = ({ products}) => (
    products.map((item, key) =>
        <div key={item.id}>
            {item.product_name === "Mini Guinea Pigs" ?
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

const MiniGuineaPigs = getProducts(MiniGuineaPigList)

export default MiniGuineaPigs
