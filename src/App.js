import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div id="product-card">
    <div id="product-image">
      <img src="images/Cleanser.png" alt="cleanser image" />
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
        <li>Product Brand: test test</li>
        <li>Product Name: Rice Wash</li>
        <li>Purchase Date: 01/01/2023</li>
        <li>Empty Date: </li>
        <li>Expiry Date: 01/01/2024</li>
      </ul>
    </div>
  </div>
  
  );
}


export default App;
