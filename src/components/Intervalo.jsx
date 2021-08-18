import React from "react";
import "./Intervalo.css";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarValorMinimo } from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;
  props.alterarMinimo(10000);
  return (
    <Card title="Intervalo de Numeros" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo</strong>
          <input type="number" value={min} />
        </span>
        <span>
          <strong>Minimo</strong>
          <input type="number" value={max} />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapActionCreatorsToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // action creatior - > action

      const action = alterarValorMinimo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(Intervalo);
