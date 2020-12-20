import React from 'react'
import {ProductContainer,ProductHeading,ProductWrapper,ProductCard,ProductImg,
ProductInfo,ProductTitle,ProductDes,ProductBtn,ProductPrice} from './ProductElements';
const Product = ({heading,Data}) => {
    return (
        <ProductContainer>
          <ProductHeading>
            {heading}
          </ProductHeading>  
           <ProductWrapper>
            {Data.map((data,index)=>{
              return(
                 <ProductCard key={index}>
                   <ProductImg src={data.img} alt="pizza-img"/>
                   <ProductInfo>
                       <ProductTitle>{data.name}</ProductTitle>
                       <ProductDes>{data.description}</ProductDes>
                       <ProductPrice>{data.price}</ProductPrice>
                       <ProductBtn>Add to Cart</ProductBtn>
                   </ProductInfo>
                 </ProductCard>
              );
            })}
           </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
