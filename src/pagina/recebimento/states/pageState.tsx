import { create } from "zustand";

interface IPageState {
  pagina: "info_carro" | "info_temperatura" | "conferencia" | "anomalia";
  SET_PAGE: (by: "info_carro" | "info_temperatura" | "conferencia" | "anomalia") => void;
}

export const useInfoPageStore = create<IPageState>((set) => ({
  pagina: "info_carro",
  SET_PAGE(by) {
    pagina: by;
  },
}));
