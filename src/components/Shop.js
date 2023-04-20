import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Shop() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "2001: A Space Odyssey - Blu-ray",
      price: 15.99,
      image: "/img/2001.jpg",
    },
    {
      id: 2,
      name: "The Birds - Blu-ray",
      price: 15.99,
      image: "/img/Birds.jpg",
    },
    {
      id: 3,
      name: "Brokeback Mountain - Blu-ray",
      price: 15.99,
      image: "/img/Brokeback.jpg",
    },
    {
      id: 4,
      name: "A Clockwork Orange - Blu-ray",
      price: 15.99,
      image: "/img/Clockwork.jpg",
    }, 
    {
      id: 5,
      name: "The Exorcist - Blu-ray",
      price: 15.99,
      image: "/img/Exorcist.jpg",
    },
    {
      id: 6,
      name: "Friday The 13th - 4k Blu-ray",
      price: 19.99,
      image: "/img/Friday.jpg",
    },
    {
      id: 7,
      name: "Halloween - 4k Blu-ray",
      price: 19.99,
      image: "/img/Halloween.jpg",
    },
    {
      id: 8,
      name: "The Way He Looks - Blu-ray",
      price: 15.99,
      image: "/img/Looks.jpg",
    },
    {
      id: 9,
      name: "A Nightmare On Elm Street - Blu-ray",
      price: 15.99,
      image: "/img/Nightmare.jpg",
    },
    {
      id: 10,
      name: "North By Northwest - Blu-ray",
      price: 15.99,
      image: "/img/North.jpg",
    },
    {
      id: 11,
      name: "Nosferatu - Blu-ray",
      price: 15.99,
      image: "/img/Nosferatu.jpg",
    },
    {
      id: 12,
      name: "Psycho - Blu-ray",
      price: 15.99,
      image: "/img/Psycho.jpg",
    },
    {
      id: 13,
      name: "The Silence of The Lambs - 4K Blu-ray",
      price: 19.99,
      image: "/img/Silence.jpg",
    },
    {
      id: 14,
      name: "Scream - Blu-ray",
      price: 15.99,
      image: "/img/Scream.jpg",
    },
    {
      id: 15,
      name: "Se7en - Blu-ray",
      price: 15.99,
      image: "/img/Seven.jpg",
    },
    {
      id: 16,
      name: "The Shining - 4k Blu-ray",
      price: 19.99,
      image: "/img/Shining.jpg",
    },
    {
      id: 17,
      name: "The Simpsons: The Movie - Blu-ray",
      price: 15.99,
      image: "/img/Simpsons.jpg",
    },
    {
      id: 18,
      name: "Vertigo - Blu-ray",
      price: 15.99,
      image: "/img/Vertigo.jpg",
    },
    {
      id: 19,
      name: "Rear Window - Blu-ray",
      price: 15.99,
      image: "/img/Window.jpg",
    },
    {
      id: 20,
      name: "It's A Wonderful Life - Blu-ray",
      price: 15.99,
      image: "/img/Wonderful.jpg",
    }
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...existingProduct, quantity: existingProduct.quantity - 1 }
            : item
        )
      );
    }
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="cart-item-details">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => removeFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="cart-total">
            <h3>Total: ${total}</h3>
          </div>
        )}
        <Link to="/">
          <button className="go-back-button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Shop;
