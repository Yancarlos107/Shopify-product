import "C:/Users/YAN/Desktop/Nueva carpeta/PersonalProjects/gradiweb-prueba/src/styles/InfoPrice.css";

function InfoPrice(props) {
  return (
    <div>
      <h2>
        $ {props.object.price === 0 ? props.price : props.object.price}{" "}
        <del>
          ${" "}
          {props.object.compare === 0
            ? props.compare
            : props.object.compare_at_price}
        </del>
      </h2>
    </div>
  );
}

export default InfoPrice;
