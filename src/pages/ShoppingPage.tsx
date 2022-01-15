import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from "../data/products"

export const ShoppingPage = () => {

    const product = products[0];
    
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div>
                <ProductCard
                    key={ product.id }
                    product={ product } 
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>  
    )   
}
