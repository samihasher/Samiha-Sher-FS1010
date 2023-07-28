import React from 'react';
import { ProductCardContainer, ProductImage, ProductInfoList, ProductSelect } from './ProductStyles';

function ProductCard({ imageSrc, altText, productBrand, productName, purchaseDate, expiryDate }) {
  return (
    <ProductCardContainer>
      <ProductImage>
        <img src={imageSrc} alt={altText} />
      </ProductImage>
      <div id="product-info">
        <label htmlFor="product"></label>
        <ProductSelect name="product" id="product">
          <option>Select</option>
          <option>Cleanser</option>
          <option>Toner</option>
          <option>Serum</option>
          <option>Moisturizer</option>
          <option>Face Oil</option>
          <option>Face Mask</option>
          <option>Sunscreen</option>
        </ProductSelect>
        <ProductInfoList id="pl-info">
          <li>Product Brand: {productBrand}</li>
          <li>Product Name: {productName}</li>
          <li>Purchase Date: {purchaseDate}</li>
          <li>Empty Date:</li>
          <li>Expiry Date: {expiryDate}</li>
        </ProductInfoList>
      </div>
    </ProductCardContainer>
  );
}

export default ProductCard;
