/** @format */

import { IProduto } from "../type";

export interface StateReducer {
    ocr?: string;
    doca?: string;
    placa?:string;
    lacre?:string;
    fotoLacre?: File | null;
    fotoCarretaFechada?: File | null;
    fotoCarretaAberta?: File | null;
    temperatura?: number;
    produtos:IProduto[]
    // Adicione outros estados de paginação, se necessário
  }

export type ActionType =
  | {type: 'SET_OCR_PLACA'; payload: {ocr:string, placa:string}}
  | { type: 'SET_INFO_INICIAL'; payload: {ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null} }
  | { type: 'SET_INFO_TEMPERATURA'; payload: {temperatura:number, fotoCarretaAberta?: File|null} }
  | { type: 'ADD_MATERIAL'; payload: {produtos:IProduto}}
  | { type: 'REMOVE_MATERIAL'; payload: string}
  | {type:'UPDATE_MATERIAL'; payload: {sku:string, lote:string, quantidade:number, id:string}}

//ESTADO UNICIAL
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

//ACOES
export const recebimentoReducer = (
	state: StateReducer,
	action: ActionType,
): StateReducer => {
	switch (action.type) {
		case "SET_INFO_INICIAL":
			return {
				...state,
				doca: action.payload.doca,
				ocr: action.payload.ocr,
				placa: action.payload.placa,
				lacre: action.payload.lacre,
				fotoLacre: action.payload.fotoLacre ? action.payload.fotoLacre : null,
				fotoCarretaFechada: action.payload.fotoCarretaFechada
					? action.payload.fotoCarretaFechada
					: null,
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
					ocr: action.payload.ocr, placa: action.payload.placa
				};
		case "ADD_MATERIAL":
			return {
				...state,
				produtos: [...state.produtos, action.payload.produtos],
			};

		case "UPDATE_MATERIAL":
				return {
					...state,
					produtos: state.produtos.map(item => item.id === action.payload.id? {...item, quantidade:action.payload.quantidade, sku: action.payload.sku, lote:action.payload.lote} : item)
				};
		case "REMOVE_MATERIAL":
			// Filtra os produtos, removendo aquele com o SKU correspondente
			const updatedProdutos = state.produtos.filter(
				(produto) => produto.id !== action.payload,
			);
			return {
				...state,
				produtos: updatedProdutos,
			};
		default:
			return state;
	}
};
