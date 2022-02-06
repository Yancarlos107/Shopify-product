import "C:/Users/YAN/Desktop/Nueva carpeta/PersonalProjects/gradiweb-prueba/src/styles/Selectorsize.css";

function Selectorsize(props) {
  const { option, setSize } = props;
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
