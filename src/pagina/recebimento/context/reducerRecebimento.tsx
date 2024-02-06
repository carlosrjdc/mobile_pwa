/** @format */

import { ActionType, StateReducer } from "./type";

// Definindo os tipos
export const initialStateRecebimento: StateReducer = {
  ocr: "",
  doca: "",
  fotoCarretaAberta: null,
  fotoCarretaFechada: null,
  fotoLacre: null,
  lacre: "",
  placa: "",
  temperatura: 0,
  produtos: [],

  // Adicione outros estados relacionados à paginação, se necessário
};

export const recebimentoReducer = (
  state: StateReducer,
  action: ActionType
): StateReducer => {
  switch (action.type) {
    case "SET_INFO_INICIAL":
      return {
        ...state,
        doca: action.payload.doca,
        lacre: action.payload.lacre,
        fotoLacre: action.payload.fotoLacre,
        fotoCarretaFechada: action.payload.fotoCarretaFechada,
      };
    case "SET_INFO_TEMPERATURA":
      return {
        ...state,
        temperatura: action.payload.temperatura,
        fotoCarretaAberta: action.payload.fotoCarretaAberta
          ? action.payload.fotoCarretaAberta
          : null,
      };
    case "SET_OCR_PLACA":
      return {
        ...state,
        ocr: action.payload.ocr,
        placa: action.payload.placa,
      };
    case "ADD_MATERIAL":
      return {
        ...state,
        produtos: [...state.produtos, action.payload.produtos],
      };

    case "UPDATE_MATERIAL":
      return {
        ...state,
        produtos: state.produtos.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantidade: action.payload.quantidade,
                sku: action.payload.sku,
                lote: action.payload.lote,
              }
            : item
        ),
      };
    case "REMOVE_MATERIAL":
      // Filtra os produtos, removendo aquele com o SKU correspondente
      const updatedProdutos = state.produtos.filter(
        (produto) => produto.id !== action.payload
      );
      return {
        ...state,
        produtos: updatedProdutos,
      };

    default:
      return state;
  }
};
