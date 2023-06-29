import React from "react";
import "./estilos/panel.sass";

export default function Panel({ text,volumeChange, volume,setText,cambiarP,power }) { return (
    <div className="panel container">
      <h3 className="power">Power</h3>
      <div className="panel-btn">
        <div onClick={cambiarP} style={{float: power ? 'right' :'left', background: power ? '#8b5d3d' :'#645f5d'
      
      }}></div>
      </div>
      <p className="panel-text" id="display">
        {power ? text : null}
      </p>
      <input
        onChange={(e)=>{
          volumeChange(e)
          setText('Volume: ' + Math.round(e.target.value * 100))
        } }
        className="volumen"
        type="range"
        min={0}
        max={1}
        volume = {volume}
        step={0.01}
      ></input>
    </div>
  );
}
