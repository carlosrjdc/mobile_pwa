import { get, set } from "idb-keyval";
import { z } from "zod";

const validateSKUInArray = async (value: string) => {
  const skuValidar = await get("produtos");
  if (skuValidar) {
    const skuExists = skuValidar.some(
      (obj: any) => obj.sku === parseInt(value)
    );
    return skuExists;
  }
  return false;
};

const validateEnderecoInArray = async (value: string) => {
  const enderecoValidar = await get("endereco");
  if (enderecoValidar) {
    const enderecoExist = enderecoValidar.some(
      (obj: any) => obj.endereco === value
    );
    return enderecoExist;
  }
  return false;
};

export const schemaContagem = z.object({
  sku: z.string().refine(validateSKUInArray, {
    message: "errado",
  }),
  lote: z.string(),
  caixas: z.number(),
  desc:z.string().optional(),
  unidade: z.number(),
  endereco: z.string().refine(validateEnderecoInArray, {
    message: "Endereço incorreto",
  }),
});

export type IContagem = z.infer<typeof schemaContagem>;

export type IEndereco = {
  id: number;
  idDemanda: number;
  visitado: string;
  skusPossiveis: number;
  skusVisitado: number;
  endereco: string;
  idEndereco: number;
};

export type IMaterial = {
  desc: string;
  sku: number;
  dum: string;
  ean: string;
  tipo: "PVAR" | "PPAR";
  empresa: "dpa" | "lactalis" | "itambe" | undefined;
};
