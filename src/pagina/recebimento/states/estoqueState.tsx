import { create } from "zustand";


interface ProductEstoqueState {
  produtos: IProduto[];
  ADD_PRODUTO: (by: IProduto) => void;
  REMOVE_PRODUTO: (by: string) => void;
  UPDATE_PRODUTO: (by: {
    id: string;
    sku:string;
    lote: string;
    quantidade: number;
    unidade:number;
    endereco:string,
    fabricacao:string,

  }) => void;
}

export const useProductEstoqueStore = create<ProductEstoqueState>((set) => ({
  produtos: [],
  ADD_PRODUTO(by) {
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
          ? { ...item, sku:by.sku, lote: by.lote, quantidade: by.quantidade, unidade:by.unidade }
          : item
      ),
    }));
  },
}));


export interface IProduto {
  id: string;
  endereco: string;
  sku: string;
  empresa?: string;
  descricao?: string;
  fabricacao:string;
  sif:number;
  lote: string;
  quantidade: number;
  unidade?:number;

}
