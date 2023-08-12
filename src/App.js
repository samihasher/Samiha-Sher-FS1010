import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
import { ProductsContainer } from './ProductStyles';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import products from './Data'; 


function App() {
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
      </ProductsContainer>
      <Footer />
    </section>

  );
}

export default App;
