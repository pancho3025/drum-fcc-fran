import "./estilos/boton.sass";
import { useEffect } from "react";

function Boton({ tecla, url, play, teclaCode, id, cambiarTextoClick,power }) {
  const handleKey = (e) => {
    if (e.keyCode === teclaCode) {
      play(tecla);
      const botonEditar = document.querySelector(`.${tecla}`);
      botonEditar.style.background =
        "radial-gradient(ellipse at center, rgba(240, 249, 255, 1) 0%,#7c6b65 100%)";
      botonEditar.style.filter = "brightness(1.1)";
      botonEditar.style.transform = "scale(1.02)";
      botonEditar.style.color = "#463c39";
    }
  };
  const sacarEstilos = (e) => {
    if (e.keyCode === teclaCode) {
      const botonEditar = document.querySelector(`.${tecla}`);
      botonEditar.style.background = "";
      botonEditar.style.filter = "";
      botonEditar.style.transform = "";
      botonEditar.style.color = "";
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.addEventListener("keyup", sacarEstilos);
  }, []);

  return (
    <button
      onClick={() => {
        cambiarTextoClick(id);
        
        play(tecla);
      }}
      id={id}
      className={`drum-pad btn3 ${tecla}`}
    >
      <audio className="clip" id={tecla} src={power ? url : 'caca'} />
      {tecla}
    </button>
  );
}

export default Boton;
