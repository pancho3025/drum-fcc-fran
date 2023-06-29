import React, { useState, useEffect } from "react";
import Panel from "./Panel";
import "./estilos/dj.sass";
import Bateria from "./Bateria";
const firstSoundsGroup = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
function Dj() {
  //Volumen
  const [volume, setVolume] = useState(1);
  const volumeChange = (e) => {
    setVolume(e.target.value);
  };
  const setKeyVolume = () => {
    const audios = firstSoundsGroup.map((sound) =>
      document.getElementById(sound.key)
    );
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  //Display texto
  const [text, setText] = useState("");
  const changeText = (e) => {
    const xd = firstSoundsGroup.filter((ele) => ele.keyCode == e.keyCode);
    setText(xd[0].id);
  };
  const cambiarTextoClick = (id) => {
    setText(id);
  };
  useEffect(() => {
    document.addEventListener("keydown", changeText);
  }, []);

  //Power

  const [power, setPower] = useState(true);

  const cambiarP = () => {
    setPower(!power);
  };

  return (
    <div id="drum-machine" className="dj-cont">
      {setKeyVolume()}
      <div className="cont">
        <Bateria
          power={power}
          cambiarTextoClick={cambiarTextoClick}
          firstSoundsGroup={firstSoundsGroup}
        />
      </div>
      <Panel
        cambiarP={cambiarP}
        power={power}
        text={text}
        volumeChange={volumeChange}
        setText={setText}
        volume={volume}
        firstSoundsGroup={firstSoundsGroup}
      />
    </div>
  );
}

export default Dj;
