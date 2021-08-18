import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card title="Soma dos Numeros" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToPro(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToPro)(Soma);
