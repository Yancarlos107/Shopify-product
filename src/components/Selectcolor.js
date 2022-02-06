import "./styles/Selectcolor.css";

function Selectcolor(props) {
  const { option, setValor } = props;

  return (
    <div className="select">
      <p>Color:</p>
      <ul className="select-color">
        {option.values.map((color, index) => (
          <li className="list-color">
            <button
              className="select-color-button"
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => setValor(color)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Selectcolor;
