import { create } from "zustand";

interface ProductEstoqueState {
  produto:IProduto;
  produtos: IProduto[];
  ADD_ID_DEMANDA:(by:number)=> void
  ADD_PRODUTO: (by: IProduto) => void;
  ADD_PRODUTO_SINGLE: (by: IProduto) => void;
  ADD_PRODUTO_PESO: (by: number) => void;
  ADD_DESC_EMPRESA:(by: {empresa: string, desc:string, tipo?:"PPAR" | "PVAR", sku:string })=> void;
  ADD_ID_ENDERECO:(by: {idEndereco:number, endereco:string})=> void;
  REMOVE_PRODUTO: (by: string) => void;
  UPDATE_PRODUTO: (by: {
    id: string;
    lote: string;
    quantidade: number;
    unidade: number;
  }) => void;
}

interface PageEstoqueContagemState {
  pagina: "";
  SET_PAGE: (by: "") => void;
}

export const usePageContagemEstoque = create<PageEstoqueContagemState>(
  (set) => ({
    pagina: "",
    SET_PAGE(by) {
      set((state) => ({
        pagina: by,
      }));
    },
  })
);

export const useProductEstoqueStore = create<ProductEstoqueState>((set) => ({
  produto:{
    caixas:0,
    demandaId:0,
    endereco:"",
    id:"",
    lote:"",
    sku:"",

  },
  produtos: [],
  ADD_PRODUTO_PESO(by){
    set((state)=>({
      produto:{...state.produto, peso:by},
      produtos:[...state.produtos]
    }))
  },
  ADD_ID_DEMANDA(by){
    set((state)=>({
      produto:{...state.produto, demandaId:by},
      produtos: [...state.produtos],
    }))
  },
  ADD_ID_ENDERECO(by){
    set((state)=> ({
      produto:{...state.produto, idEndereco:by.idEndereco, endereco: by.endereco},
      produtos:[...state.produtos]
    }))
  },
  ADD_DESC_EMPRESA(by){
    set((state)=>({
      produto:{...state.produto, sku: by.sku, descricao:by.desc, empresa:by.empresa, tipo:by.tipo},
      produtos:[...state.produtos]
    }))
  },
  ADD_PRODUTO_SINGLE(by){
    set((state)=>({
      produto:{...state.produto, sku:by.sku, id:by.id, caixas:by.caixas, endereco:by.endereco, lote:by.lote, descricao:by.descricao, unidade:by.unidade},
      produtos:[...state.produtos]
    }))
  },
  ADD_PRODUTO(by) {
    set((state) => ({
      produto:{...state.produto},
      produtos: [...state.produtos, by],
    }));
  },
  REMOVE_PRODUTO(by) {
    set((state) => ({
      produto:{...state.produto},
      produtos: state.produtos.filter((item) => item.id !== by),
    }));
  },
  UPDATE_PRODUTO(by) {
    set((state) => ({
      produto:{...state.produto},
      produtos: state.produtos.map((item: IProduto) =>
        item.id === by.id
          ? {
              ...item,
              lote: by.lote,
              quantidade: by.quantidade,
              unidade: by.unidade,
            }
          : item
      ),
    }));
  },
}));

export interface IProduto {
  demandaId?: number;
  desc?:string;
  id: string;
  endereco: string;
  idEndereco?: number;
  sku: string;
  empresa?: string;
  tipo?: "PVAR" | "PPAR";
  descricao?: string;
  lote: string;
  caixas: number;
  unidade?: number;
  peso?:number;
}

export interface IPage {
  pagina: string;
}

interface DemandaState {
  idDemanda: number | null;
  SET_DEMANDA: (by: { demanda: number }) => void;
}

export const useDemandaState = create<DemandaState>((set) => ({
  idDemanda: null,
  SET_DEMANDA(by) {
    set((state) => ({
      idDemanda: by.demanda,
    }));
  },
}));
