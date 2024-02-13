import { get } from "idb-keyval";

export async function buscarInfoBandoIndexed(
  buscar: number | string,
  coluna: string,
  banco: string
) {
  const skuValidar = await get(banco);
  if (skuValidar) {
    const dados = skuValidar.filter((item: any) => item[coluna] === buscar)[0];
    if (dados) {
      if (banco === "endereco") {
        return {
          endereco: dados.endereco,
          idDemanda: dados.idDemanda,
          idEndereco: dados.idEndereco,
          id: dados.id,
          visitado: dados.visitado,
        } 
      }
      if (banco === "produtos") {
        return { sku: dados.desc, tipo: dados.tipo, empresa: dados.empresa };
      }
    }
  }

  return null;
}
