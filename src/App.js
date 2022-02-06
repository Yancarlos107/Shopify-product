import { useState, useEffect } from "react";

import Carrousel from "./components/Carrousel";
import ProductInfo from "./components/ProductInfo";
import Information from "./components/Information";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

function App() {
  const [product, setProduct] = useState({});
  const [loadings, setLoadings] = useState(true);

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
  return (
    <div>
      {loadings === true ? (
        <LoadingPage />
      ) : (
        <div className="App">
          <Carrousel media={media} />
          <div className="Infoproduct">
            <ProductInfo
              options={options}
              variants={variants}
              title={title}
              price={price}
              compare={compare_at_price}
            />
            <Information description={description} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
