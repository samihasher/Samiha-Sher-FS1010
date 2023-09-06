import React, { useState } from 'react';
import { ProductsContainer } from '../ProductStyles';
import ProductCard from '../ProductCard';
import products from '../Data';

const Routines = () => {
    const [numBlankCards, setNumBlankCards] = useState(0);
    return (
         <section id="products">
         <div className="title"><h2>AM Routine</h2></div>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard 
          key={product.id}
          imageSrc={product.imageSrc}
          altText={product.altText}
          productBrand={product.productBrand}
          productName={product.productName}
          purchaseDate={product.purchaseDate}
          expiryDate={product.expiryDate}
/>
        ))}
        {[...Array(numBlankCards)].map((_, index) => (
          <ProductCard key={`blank-${index}`} />
        ))}
      </ProductsContainer>
      <div className="Add-Button">
          <button onClick={() => setNumBlankCards(numBlankCards + 1)}>Add More</button>
        </div>   
        </section> 
        ); 
    };

export default Routines;