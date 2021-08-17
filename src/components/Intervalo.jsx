import React from "react";
import "./Intervalo.css";

import Card from "./Card";

const Intervalo = () => {
  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Minimo</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
};

export default Intervalo;
