/** @format */

import { ActionTypePage, StateReducerPagina } from "./type";

// Definindo os tipos
export const initialStateRecebimentoPagina: StateReducerPagina = {
  page: "info_carro",

  // Adicione outros estados relacionados à paginação, se necessário
};

export const recebimentoPaginaReducer = (
  state: StateReducerPagina,
  action: ActionTypePage
): StateReducerPagina => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    case "ADD_INDEX":
	  const info = action.payload
      return {
        ...state,
		sku:JSON.stringify(info)
       
      };
    default:
      return state;
  }
};
