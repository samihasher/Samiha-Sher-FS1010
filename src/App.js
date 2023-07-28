import logo from './logo.svg';
import './App.css';


import React from 'react';
import ProductCard from './ProductCard';
import { ProductsContainer } from './ProductStyles';

function App() {
  return (
    <section id="products">
        <ProductsContainer>
      <ProductCard
        imageSrc="images/Cleanser.png"
        altText="cleanser image"
        productBrand="Tatcha"
        productName="Rice Wash"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />

      <ProductCard
        imageSrc="images/Toner.png"
        altText="toner image"
        productBrand="Pixi"
        productName="Glow Toner"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />

      <ProductCard
        imageSrc="images/Moist.png"
        altText="Moist image"
        productBrand="Farmacy"
        productName="Honey Drop"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />
      <ProductCard
        imageSrc="images/Serum1.png"
        altText="Serum1 image"
        productBrand="The Ordinary"
        productName="Niacinimide Serum"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />

      <ProductCard
        imageSrc="images/Serum2.png"
        altText="Serum2 image"
        productBrand="Beauty of Joseon"
        productName="Glow Serum"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />

      <ProductCard
        imageSrc="images/Sunscreen.png"
        altText="Sunscreen image"
        productBrand="Supergoop"
        productName="Unseen sunscreen"
        purchaseDate="01/01/2023"
        expiryDate="01/01/2024"
      />

</ProductsContainer>







    </section>
  );
}

export default App;
