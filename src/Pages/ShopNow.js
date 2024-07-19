import React from 'react';
import './ShopNow.css'; 
import image1 from '../Pages/Picture/Tolempole.jpg';
import image2 from '../Pages/Picture/ferocactus.jpg';
import image3 from '../Pages/Picture/peruvia.jpg';
import image4 from '../Pages/Picture/mexicanfence.jpg';

const ShopNow = () => {
 
  const products = [
    {
      name: 'Totem Pole "Major"',
      price: '$95.00 USD',
      image: image1, 
      reviews: 4.5,
    },
    {
      name: 'Ferocactus Pringlei',
      price: '$125.00 USD',
      image: image2, 
      reviews: 5,
      reviewCount: 20,
    },
    {
      name: 'Peruvian Apple',
      price: '$75.00 USD',
      image: image3, 
      reviews: 4.7,
    },
    {
      name: 'Mexican Fence Post Cactus',
      price: '$90.00 USD',
      image: image4, 
      reviews: 4.8,
    },
  ];

  return (
    <div className="shop-now-section">
      <h1 className="shop-now-title">Best Sellers</h1>
      <div className="shop-now-content">
        <div className="more-section">
          <button className="more-button">More</button>
        </div>
        <div className="shop-now-grid">
          {products.map((product, index) => (
            <div key={index} className="shop-now-item">
              <img src={product.image} alt={product.name} className="shop-now-image" />
              <h2 className="shop-now-product-name">{product.name}</h2>
              <p className="shop-now-price">from {product.price}</p>
              <div className="shop-now-reviews">
                {'★'.repeat(Math.floor(product.reviews))}
                {'☆'.repeat(5 - Math.floor(product.reviews))}
                {product.reviewCount && <span> {product.reviewCount} Reviews</span>}
              </div>
              <button className="shop-now-button">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopNow;




