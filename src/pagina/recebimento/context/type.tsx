import { Dispatch, ReactNode } from "react";

export type ActionTypePage =
  | {type: 'SET_PAGE'; payload: {page:"info_carro" | "info_temperatura" | "conferencia" | "anomalia"}}
  | {type: 'ADD_INDEX'; payload: string}

  export interface StateReducerPagina {
    page:"info_carro" | "info_temperatura" | "conferencia" | "anomalia",
    sku?: string
  }


  export type ActionTypeAnomalia =
  | {type: 'SET_PAGE'; payload: StateReducerAnomalia}

  export interface StateReducerAnomalia{
    origemNaoConformidade: string
    naturezaNaoConformidade:string
    tipoNaoConformidade:string
    causaAvaria:string
  }

export type ActionType =
  | {type: 'SET_OCR_PLACA'; payload: {ocr:string, placa:string}}
  | { type: 'SET_INFO_INICIAL'; payload: {doca:string,  lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null} }
  | { type: 'SET_INFO_TEMPERATURA'; payload: {temperatura:number, fotoCarretaAberta?: File|null} }
  | { type: 'ADD_MATERIAL'; payload: {produtos:IProduto}}
  | { type: 'REMOVE_MATERIAL'; payload: string}
  | {type:'UPDATE_MATERIAL'; payload: {sku:string, lote:string, quantidade:number, id:string}}
  | {type:"ADD_ANOMALIA"; payload:IAnomalia}

export interface InterfaceProviderProps {
    children: ReactNode;
}

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

  export interface IProduto{
    idPallet:string,
    id:string;
    sku: string;
    descricao?:string;
    lote:string;
    quantidade:number;
    peso?:number;
    anomalias?:IAnomalia | null
  }

  export interface IAnomalia{
    origemNConformidade:string;
    natureaNConformidade:string;
    tipoNConformidade:string;
    causaNConformidade:string;

  }

export interface IType{
    number?:number
    state:StateReducer,
    dispatch:Dispatch<ActionType>,
    statePage:StateReducerPagina,
    dispatchPage:Dispatch<ActionTypePage>
    stateAnomalia:StateReducerAnomalia
    dispatchAnomalia:Dispatch<ActionTypeAnomalia>
}