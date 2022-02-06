import { useState, useEffect } from "react";

import Carrousel from "./components/Carrousel";
import ProductInfo from "./components/ProductInfo";
import Information from "./components/Information";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

function App() {
  //state que guarda el objeto que llega del API
  const [product, setProduct] = useState({});
  //state que guarda el valor del page de Loading, para saber si se muestra o no
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    //consulta mediante el metodo fetch al API
    const getData = async () => {
      const response = await fetch(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      const result = await response.json();
      //guarda el resultado de la peticion en el estado de product
      setProduct({
        ...result,
      });
      //cambia el valor de loading a false, para que la pantallade Loading no sea visible
      setLoadings(false);
    };
    getData();
  }, []);
  //desestructuración de las propiedas que usara el proyecto
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
      {/* valida el estado de loadings, para mostrar la pantalla de loading o mostrar la card del producto con la informacion una vez ha realizado la consulta en el api */}
      {loadings === true ? (
        <LoadingPage />
      ) : (
        <div className="App">
          {/* Componente de carrousel para las imagenes que llegan del API*/}
          <Carrousel media={media} />
          <div className="Infoproduct">
            {/* Componente con la informacion del producto(titulo, colores, tallas, etc) */}
            <ProductInfo
              options={options}
              variants={variants}
              title={title}
              price={price}
              compare={compare_at_price}
            />
            {/* Componente con la descripcion del producto */}
            <Information description={description} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
