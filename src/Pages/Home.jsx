import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="Hcontainer">
      {/* Row 1 */}
      <div className="row">
        <div className="image">
          <img src="images/image1.png" alt="Image 1" className="image1" />
        </div>
        <div className="text">
          <p>Your skin is your canvas</p>
        </div>
        <div className="image">
          <img src="images/image2.png" alt="Image 2" className="image2" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="row2green">
          <p>Build Your Routine</p>
        </div>
        <div className="image">
          <img src="images/image3.png" alt="Image 3" className="image3" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="image">
          <img src="images/image4.png" alt="Image 4" />
        </div>
        <div className="r3green-box">
          <p>MySkin is here to help you...</p>
          <ul>
            <li>Build a skincare routine you love doing</li>
            <li>Track products that work for you</li>
            <li>Record expiry dates</li>
            <li>Love your skin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
