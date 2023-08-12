import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';
import { ProductsContainer } from './ProductStyles';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import products from './Data'; 


function App() {
  const [numBlankCards, setNumBlankCards] = useState(0);
  return (

    <section id="products">
        <NavBar />
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
      <Footer />
    </section>
  );
}

export default App;
