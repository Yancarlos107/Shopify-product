import { useState } from "react";
import Counter from "./Counter";
import "./styles/TotalProduct.css";

function TotalProduct(props) {
  const [counter, setCounter] = useState(0);
  //multiplica el precio del producto por la cantidad seleccionada
  return (
    <div className="product-total">
      <Counter
        counter={counter}
        setCounter={(counter) => setCounter(counter)}
      ></Counter>
      <div>
        <p>
          {" "}
          Total Price:{" "}
          <b>
            <span>$ {props.price * counter}</span>
          </b>
        </p>
      </div>
    </div>
  );
}

export default TotalProduct;
