function InfoProduct(props) {
  const { object } = props;
  return (
    <div style={{ border: "1px solid #b2b2b2" }}>
      <p>
        El producto: <b>{object.name}</b> ha sido agregado con exito!! Color:{" "}
        <b>{object.option1}</b> y tu talla es: <b>{object.option2}</b>
      </p>
    </div>
  );
}

export default InfoProduct;
