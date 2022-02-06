import React, { useState } from "react";

import Selectcolor from "./Selectcolor";
import Selectorsize from "./Selectorsize";
import ButtonsProduct from "./ButtonsProduct";
import TotalProduct from "./TotalProduct";
import InfoPrice from "./InfoPrice";
import InfoProduct from "./InfoProduct";

function ProductInfo(props) {
  const { variants, options, title, price, compare } = props;
  //guarda los valores de color y size que provienen de los componentes hijos
  const [saveColor, setColor] = useState("");
  const [saveSize, setSize] = useState("");
  //guarda el valor que valida si mostrar o no la informacion de la compra
  const [show, setShow] = useState(false);
  //guarda los datos que escoge el usuario(color, talla)
  let [object, setObject] = useState({
    title: "",
    price: 0,
    compare: 0,
  });
  //validar el estado del objeto donde se guarda la seleccion del usuario y filtra de las variantes del producto, objeto que contiene las mismas caracteristicas
  const addCart = (saveColor, saveSize) => {
    if (saveColor === "" && saveSize === "") {
      return;
    } else {
      object = variants.find(
        (data) => data.option1 === saveColor && data.option2 === saveSize
      );
      setObject(object);
    }
  };
  return (
    <div>
      {/* muestra el titulo general del producto, si el cliente no ha seleccionado un color y una talla, y lo ha agregado al carrito */}
      <h1>{object.title === "" ? title : object.title}</h1>
      <InfoPrice object={object} price={price} compare={compare}></InfoPrice>
      <hr />
      <Selectcolor option={options[0]} setValor={(color) => setColor(color)} />
      <hr />
      <Selectorsize option={options[1]} setSize={(size) => setSize(size)} />
      <hr />
      <TotalProduct price={price}></TotalProduct>
      <ButtonsProduct
        show={show}
        setShow={setShow}
        addCart={addCart}
        saveColor={saveColor}
        saveSize={saveSize}
      ></ButtonsProduct>
      {show === true ? <InfoProduct object={object}></InfoProduct> : null}
    </div>
  );
}

export default ProductInfo;
