import "./styles/Selectorsize.css";

function Selectorsize(props) {
  const { option, setSize } = props;
  //recorre las propiedades de talla del producto y crea un componente de boton por cada index que tenga el objeto de talla
  return (
    <div className="select">
      <p>Size:</p>
      <ul className="select-size">
        {option.values.map((size, index) => (
          <li className="list-size">
            <button
              className="select-size-button"
              key={[index]}
              onClick={() => setSize(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Selectorsize;
