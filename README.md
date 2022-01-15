# FHO-Product-Card

This is a deployment test package for NPM

### Franciscojho

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'fho-product-card';
```

```
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
```