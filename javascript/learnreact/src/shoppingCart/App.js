import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shoppingCart.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    null !== sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : []
  );

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://dummyjson.com/products");
      //   console.log(result.data.products);
      setProducts(result.data.products);
    }
    fetchData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  function addToCart(e, index) {
    e.preventDefault();
    setCart([...cart, index]);
  }

  console.log(cart);
  console.log(sessionStorage.getItem("cart"));

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div className="photo">
                <img src={product.thumbnail}></img>
              </div>
              <div className="content">
                <a href="" onClick={(e) => addToCart(e, index)}>
                  Add To Cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
