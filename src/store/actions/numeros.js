// action creator

function alterarValorMinimo(novoNumero) {
  return {
    type: "NUM_MIN_ALTERADO",
    payload: novoNumero,
  };
}
