import "./styles/Carrousel.css";

function Carrousel(props) {
  //desestructuracion de las propiedades heradas del componente padre
  const { media } = props;
  //crea un array que guarda los recursos de las imagenes
  const images = media.map((product) => product.src);
  return (
    <div class="carrusel">
      <ul class="carrusel-fotos">
        <li id="foto1">
          <img src={images[0]} alt="" />
        </li>
        <li id="foto2">
          <img src={images[1]} alt="" />
        </li>
        <li id="foto3">
          <img src={images[2]} alt="" />
        </li>
        <li id="foto4">
          <img src={images[3]} alt="" />
        </li>
      </ul>
      <ul class="carrusel-menu">
        <li>
          <a href="#foto1">
            <img src={images[0]} alt="" />
          </a>
        </li>
        <li>
          <a href="#foto2">
            <img src={images[1]} alt="" />
          </a>
        </li>
        <li>
          <a href="#foto3">
            <img src={images[2]} alt="" />
          </a>
        </li>
        <li>
          <a href="#foto4">
            <img src={images[3]} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Carrousel;
