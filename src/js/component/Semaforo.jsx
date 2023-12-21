import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="linea-semaforo"></div>
      <div className="semaforo">
        <div
          onClick={() => setColor("rojo")}
          className={"color-rojo" + (color === "rojo" ? "-bordeluz" : "")}
        ></div>

        <div
          onClick={() => setColor("amarillo")}
          className={
            "color-amarillo" + (color === "amarillo" ? "-bordeluz" : "")
          }
        ></div>

        <div
          onClick={() => setColor("verde")}
          className={"color-verde" + (color === "verde" ? "-bordeluz" : "")}
        ></div>
      </div>
    </>
  );
};

export default Semaforo;
