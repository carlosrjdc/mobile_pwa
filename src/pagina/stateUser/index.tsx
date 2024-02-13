import jwt from "jsonwebtoken";
import { create } from "zustand";

interface UserState {
  user: IUser;
  UPDATE_USER: (by: {token:string, nome:string}) => void;
}

export const useUserState = create<UserState>((set) => ({
  user: {
    usuario: "",
    nome: "",
    unidade: "",
    token: "",
    grupoUnidade: [],
  },
  UPDATE_USER(by) {
    const info = jwt.decode(by.token);
    console.log(info)
    if (info as IUser) {
      set((state) => ({
        user: {
          ...state,
           //@ts-ignore
          usuario:info ? info.preferred_username : "",
          //@ts-ignore
          grupoUnidade: info ? info.grupos : "",
           //@ts-ignore
          nome: by.nome,
           //@ts-ignore
          token: by.token,
           //@ts-ignore
          unidade: info ? info.grupos[0] : "",
        },
      }));
    }
  },
}));

export interface IUser {
  usuario: string;
  nome: string;
  unidade: string;
  grupoUnidade: string[];
  token: string;
}
