import instance from "@/config/http";
import { get, update } from "idb-keyval";
import isOnline from "is-online";

export async function contagemOffline(nomeTabela: string, dados: IProduto) {
  const statusRede = await isOnline();

  if (statusRede) {
    return addBanco(nomeTabela, dados);
  } else {
    return AtualizarTabelaOffline(nomeTabela, dados) 
  }
}

async function AtualizarTabelaOffline(nomeTabela: string, dados: IProduto) {

  const infoInicial = await  get(nomeTabela)  
  if (infoInicial) {
    const addDados = [...infoInicial, dados];
    return await update(nomeTabela, (val) => addDados);
  } else {
    return await update(nomeTabela, (val) => [dados]);
  }
}


function addBanco(nomeTabela:string, dados: IProduto) {
  instance
    .post(`/lote`, dados)
    .then(() => console.log(""))
    .catch((erro) => {AtualizarTabelaOffline(nomeTabela, dados)});
}

interface IProduto {
  sku: string;
  descricao: string;
  posicao: string;
  id: string;
  caixas: number;
  unidade: number;
  demandaId: number;
}
