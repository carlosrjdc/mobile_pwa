import { Dispatch, ReactNode } from "react";

export type ActionType =
  | { type: 'SET_INFO_INICIAL'; payload: {ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null} }
  | { type: 'SET_INFO_TEMPERATURA'; payload: {temperatura:number, fotoCarretaAberta?: File|null} }
  | { type: 'ADD_MATERIAL'; payload: {produtos:IProduto}}
  | { type: 'REMOVE_MATERIAL'; payload: string};

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
    id?:string;
    sku?: string;
    lote?:string;
    quantidade?:number;
    peso?:number;
    anomalias?:IAnomalia[] | null
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
    dispatch:Dispatch<ActionType>
}