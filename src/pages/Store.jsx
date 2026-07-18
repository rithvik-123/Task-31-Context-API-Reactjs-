import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from '../components/Cart';

const dummyProducts = [
  { id: 1, name: "White Casual Sneaker", price: 70, image: "https://dummyimage.com/200x200/fff/333&text=Sneaker+1" },
  { id: 2, name: "MACTREE Men's Mid Top Ankle Boots", price: 90, image: "https://dummyimage.com/200x200/fff/333&text=Boots+2" },
  { id: 3, name: "ASIAN Mens Thar-13 Sneaker", price: 120, image: "https://dummyimage.com/200x200/fff/333&text=Sneaker+3" },
  { id: 4, name: "ASIAN Men's AIRWEAVE-02 Sports Shoes", price: 40, image: "https://dummyimage.com/200x200/fff/333&text=Sports+4" },
];

const Store = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="layout-grid">
      <div className="products-grid">
        {dummyProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="img-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar">
        <Cart isPaymentPage={false} />
      </div>
    </div>
  );
};

export default Store;