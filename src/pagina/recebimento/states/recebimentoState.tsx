import { create } from "zustand";

interface BearState {
  infoCarro: StateReducer;
  SET_INFO_INICIAL: (by: {
    doca: string;
    lacre: string;
    fotoCarretaFechada?: File | null;
    fotoLacre?: File | null;
  }) => void;
  SET_INFO_TEMPERATURA: (by: {
    temperatura: number;
    fotoCarretaAberta?: File | null;
  }) => void;

  SET_OCR_PLACA: (by: {
    ocr: string;
    placa: string;
    horarioInicio: Date;
  }) => void;
}

interface ProductState {
  produtos: IProduto[];
  ADD_PRODUTO: (by: IProduto) => void;
  REMOVE_PRODUTO: (by: string) => void;
  UPDATE_PRODUTO: (by: {
    id: string;
    lote: string;
    quantidade: number;
    unidade:number;
    peso:number;
  }) => void;
}

interface AnomaliaState {
    anomalia:IAnomalia
    ADD_ANOMALIA:(by: IAnomalia)=> void
}

export const useAnomaliaStore = create<AnomaliaState>((set)=>({
    anomalia:{
        causaNConformidade:"",
        localAvariaPallet:"",
        localAvariaVeiculo:"",
        origemNConformidade:"",
        quantidade:0,
        setorNConformidade:"",
        tipoNConformidade:""
    },
    ADD_ANOMALIA(by) {
        set((state)=>({
            anomalia:{...by}
        }))
    },

})) 

export const useProductStore = create<ProductState>((set) => ({
  produtos: [],
  async ADD_PRODUTO(by) {
    set((state) => ({
      produtos: [...state.produtos, by],
    }));
  },
  REMOVE_PRODUTO(by) {
    set((state) => ({
      produtos: state.produtos.filter((item) => item.id !== by),
    }));
  },
  UPDATE_PRODUTO(by) {
    set((state) => ({
      produtos: state.produtos.map((item: IProduto) =>
        item.id === by.id
          ? { ...item, lote: by.lote, quantidade: by.quantidade, peso:by.peso, unidade:by.unidade }
          : item
      ),
    }));
  },
}));

const useInfoCarStore = create<BearState>((set) => ({
  infoCarro: {
    ocr: "",
    doca: "",
    placa: "",
    lacre: "",
    inicioDescarga: null,
    terminoDescarga: null,
    lote: undefined,
    fotoCarretaAberta: null,
    fotoLacre: null,
    fotoCarretaFechada: null,
    temperatura: 0,
  },
  SET_INFO_INICIAL: (by) =>
    set((state) => ({
      infoCarro: {
        ...state.infoCarro,
        doca: by.doca,
        lacre: by.lacre,
        fotoCarretaFechada: by.fotoCarretaFechada,
        fotoLacre: by.fotoLacre,
      },
    })),

  SET_OCR_PLACA: (by) =>
    set((state) => ({
      infoCarro: {
        ...state.infoCarro,

        ocr: by.ocr,
        placa: by.placa,
        inicioDescarga: by.horarioInicio,
      },
    })),

  SET_INFO_TEMPERATURA: (by) =>
    set((state) => ({
      infoCarro: {
        ...state.infoCarro,
        temperatura: by.temperatura,
        fotoCarretaAberta: by.fotoCarretaAberta,
      },
    })),
}));

export default useInfoCarStore;

export interface StateReducer {
  ocr?: string;
  doca: string;
  placa?: string;
  lacre?: string;
  inicioDescarga: Date | null;
  terminoDescarga: Date | null;
  lote: string | undefined;
  fotoLacre?: File | null;
  fotoCarretaFechada?: File | null;
  fotoCarretaAberta?: File | null;
  temperatura?: number;
  // Adicione outros estados de paginação, se necessário
}

export interface IProduto {
  idPallet: string;
  id: string;
  sku: string;
  descricao?: string;
  lote: string;
  quantidade: number;
  unidade?:number;
  peso?: number;
  empresa?: string;
  anomalias?: IAnomalia | null;
}

export interface IAnomalia {
  quantidade: number;
  origemNConformidade: string;
  setorNConformidade: string;
  tipoNConformidade: string;
  causaNConformidade: string;
  localAvariaVeiculo:string;
  localAvariaPallet:string;

}

/*
  export type ActionType =
  | {type: 'SET_OCR_PLACA'; payload: {ocr:string, placa:string}}
  | { type: 'SET_INFO_INICIAL'; payload: {doca:string,  lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null} }
  | { type: 'SET_INFO_TEMPERATURA'; payload: {temperatura:number, fotoCarretaAberta?: File|null} }
  | { type: 'ADD_MATERIAL'; payload: {produtos:IProduto}}
  | { type: 'SET_LOTE'; payload: string}
  | { type: 'REMOVE_MATERIAL'; payload: string}
  | {type:'UPDATE_MATERIAL'; payload: {sku:string, lote:string, quantidade:number, id:string}}
  | {type:"ADD_ANOMALIA"; payload:IAnomalia}
  */

/*export const recebimentoReducer = (
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
    
    case "SET_LOTE":
      return{
        ...state,
        produtos:{...state.produtos,lote:action.payload}
        
      }


    default:
      return state;
  }
};*/
