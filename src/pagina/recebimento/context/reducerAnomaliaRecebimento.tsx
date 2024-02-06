/** @format */

import { ActionTypeAnomalia, StateReducerAnomalia } from "./type";

// Definindo os tipos
export const initialStateRecebimentoAnomalia: StateReducerAnomalia = {
  causaAvaria: "",
  naturezaNaoConformidade: "",
  origemNaoConformidade: "",
  tipoNaoConformidade: "",

  // Adicione outros estados relacionados à paginação, se necessário
};

export const recebimentoAnomaliaReducer = (
  state: StateReducerAnomalia,
  action: ActionTypeAnomalia
): StateReducerAnomalia => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        causaAvaria: action.payload.causaAvaria,
        naturezaNaoConformidade: action.payload.naturezaNaoConformidade,
        origemNaoConformidade: action.payload.origemNaoConformidade,
        tipoNaoConformidade: action.payload.tipoNaoConformidade,
      };
    default:
      return state;
  }
};
