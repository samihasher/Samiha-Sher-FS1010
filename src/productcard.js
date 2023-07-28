import React from 'react';

function ProductCard({ imageSrc, altText, productBrand, productName, purchaseDate, expiryDate }) {
  return (
    <div id="product-card">
      <div id="product-image">
        <img src={imageSrc} alt={altText} />
      </div>
      <div id="product-info">
        <label htmlFor="product"></label>
        <select name="product" id="product">
          <option>Select</option>
          <option>Cleanser</option>
          <option>Toner</option>
          <option>Serum</option>
          <option>Moisturizer</option>
          <option>Face Oil</option>
          <option>Face Mask</option>
          <option>Sunscreen</option>
        </select>
        <ul id="pl-info">
          <li>Product Brand: {productBrand}</li>
          <li>Product Name: {productName}</li>
          <li>Purchase Date: {purchaseDate}</li>
          <li>Empty Date:</li>
          <li>Expiry Date: {expiryDate}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
