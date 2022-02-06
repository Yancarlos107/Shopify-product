import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      const result = await response.json();

      setProduct({
        ...result,
      });
      setLoadings(false);
    };
    getData();
  }, []);
  const {
    media,
    variants,
    options,
    description,
    title,
    price,
    compare_at_price,
  } = product;
  return <div></div>;
}

export default App;
