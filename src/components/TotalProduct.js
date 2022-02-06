import { useState } from "react";
import Counter from "./Counter";
import "C:/Users/YAN/Desktop/Nueva carpeta/PersonalProjects/gradiweb-prueba/src/styles/TotalProduct.css";

function TotalProduct(props) {
  const [counter, setCounter] = useState(0);
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
