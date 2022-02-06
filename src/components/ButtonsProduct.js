import "C:/Users/YAN/Desktop/Nueva carpeta/PersonalProjects/gradiweb-prueba/src/styles/ButtonProduct.css";

function ButtonsProduct(props) {
  const { addCart, saveColor, saveSize, show, setShow } = props;
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
