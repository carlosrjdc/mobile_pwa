import { get, update } from "idb-keyval";
import { ISincronizar } from "../../function";

export async function EditarProduto(
    id: string,
    lote: string,
    quantidade: number,
    unidade: number
  ) {
    const dadosSincronia: ISincronizar[] | undefined = await get(
      "sincronizacaoContagem"
    );
    if (dadosSincronia) {
      const EditarDados = dadosSincronia.map((item) =>
        item.id === id
          ? { ...item, lote: lote, caixas: quantidade, unidade: unidade }
          : item
      );
      update("sincronizacaoContagem", () => EditarDados);
    }
  }