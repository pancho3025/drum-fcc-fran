import React from "react";
import Boton from "./Boton";

function Bateria({ power, firstSoundsGroup, cambiarTextoClick }) {
  function play(key) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  }

  return firstSoundsGroup.map(({ id, key, url, keyCode }, idx) => (
    <Boton
      power={power}
      cambiarTextoClick={cambiarTextoClick}
      id={id}
      tecla={key}
      url={url}
      key={idx}
      teclaCode={keyCode}
      play={play}
    />
  ));
}

export default Bateria;
