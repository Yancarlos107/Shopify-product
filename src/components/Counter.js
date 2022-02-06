function Counter(props) {
  return (
    <div className="counter-box">
      <button
        className="counter-btn"
        onClick={() =>
          props.counter === 0 ? 0 : props.setCounter(props.counter - 1)
        }
      >
        -
      </button>
      <p className="counter">{props.counter}</p>
      <button
        className="counter-btn"
        onClick={() => props.setCounter(props.counter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
