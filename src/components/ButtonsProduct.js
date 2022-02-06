import "./styles/ButtonProduct.css";

function ButtonsProduct(props) {
  const { addCart, saveColor, saveSize, show, setShow } = props;
  //dispara la accion de agregar al carro, con la informacion del color y la talla escogida por el usuario, y dispara tambien el cambio en el valor booleano que muestra la informacion del producto agregado
  return (
    <div className="btn-actions">
      <button className="btn">
        <b>Add to favourite</b>
      </button>
      <button
        className="btn add-cart"
        onClick={() => {
          addCart(saveColor, saveSize);
          setShow(!show);
        }}
      >
        <b>Add to cart</b>
      </button>
    </div>
  );
}

export default ButtonsProduct;
