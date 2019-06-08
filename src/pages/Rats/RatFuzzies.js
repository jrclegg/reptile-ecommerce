import React from 'react';
import getProducts from './../../components/Product'
import Image from '../../components/Image.js'
import mouse from '../../assets/mouseother.jpg'
import QuantityTitle from '../../components/QuantityTitle'
import QuantityDescription from '../../components/QuantityDescription'
import QuantityInput from '../../components/QuantityInput'
import BasketButton from '../../components/BasketButton'
import Parent from '../../components/Parent'
import MainTitle from '../../components/MainTitle'

const RatFuzziesList = ({ products}) => (
    products.map((item, key) =>
        <div key={item.id}>
            {item.product_name === "Rat Fuzzies" ?
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

const RatFuzzies = getProducts(RatFuzziesList)

export default RatFuzzies