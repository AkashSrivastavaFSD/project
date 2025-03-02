import React from'react';
import {Link } from 'react-router-dom';
import {useCart} from '../contextcomponent/CartContext.js';

function Userfruit() {
  const { addItemToCart } = useCart(); // Access the cart context

  const fruits = [
    { id: 1, name: 'Orange', price: 180, img: '/images/f-1.jpg' },
    { id: 2, name: 'Blueberry', price: 950, img: '/images/f-2.jpg' },
    { id: 3, name: 'Banana', price: 60, img: '/images/f-3.jpg' },
    { id: 4, name: 'Apple', price: 200, img: '/images/f-4.jpg' },
    { id: 5, name: 'Mango', price: 80, img: '/images/f-5.jpg' },
    { id: 6, name: 'Strawberry', price: 410, img: '/images/f-6.jpg' },
  ];

  return (
    <div>
      <section className="fruit_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h2>Fresh Fruits</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="box">
                <img src={fruit.img} alt={fruit.name} />
                <div className="link_box">
                  <h5>{fruit.name} ₹ {fruit.price}/kg</h5>
                  <Link to="#" onClick={() => addItemToCart(fruit)}>
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Userfruit;