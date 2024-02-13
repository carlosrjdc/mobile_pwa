import instance from "@/config/http";
import { IContagem, IEndereco, IMaterial } from "@/pagina/estoque/type";
import { toast, ToastContainer } from "react-toastify";
import { get, update } from "idb-keyval";
import isOnline from "is-online";

export async function VerificarEndereco(e: any, setEndereco: any,setEnderecoAtualizar:any) {
  const enderecoPosiveis: IEndereco[] | undefined = await get("endereco");
  if (enderecoPosiveis) {
    if (e.target.value !== "") {
      const filtrar = enderecoPosiveis.filter(
        (item) => item.endereco === e.target.value
      );
      if (filtrar.length > 0) {
        setEndereco(filtrar[0].idEndereco);
        setEnderecoAtualizar(filtrar[0].id);
        if (filtrar[0].skusVisitado >= filtrar[0].skusPossiveis) {
          toast.warning(
            `O Endereço aceita apenas ${filtrar[0].skusVisitado} e já foi cadastrado ${filtrar[0].skusPossiveis}`,
            {
              position: "bottom-center",
            }
          );
        }
      } else {
        toast.error("Endereço não consta na sua lista de demanda", {
          position: "bottom-center",
        });
      }
    }
  }
}

export async function cadastrarEnderecos(endereco: IEndereco[]) {
  return update("endereco", () => endereco);
}

export async function atualizarEndereco(endereco: number) {
  const enderecosPossiveis: IEndereco[] | undefined = await get("endereco");
  if (enderecosPossiveis) {
    const enderecoAtualizados = enderecosPossiveis.map((item) =>
      item.idEndereco === endereco
        ? { ...item, status: item.skusVisitado + 1 }
        : item
    );

    update("endereco", () => enderecoAtualizados);
  }
}

export async function onChangeProduto(event: any) {
  const produto: IMaterial[] | undefined = await get("produtos");

  if (produto) {
    const material = produto.filter(
      (item) =>
        item.dum === event.target.value ||
        item.ean === event.target.value ||
        item.sku === parseInt(event.target.value)
    );
    if (material.length > 0) {
      return { desc: material[0].desc, empresa: material[0].empresa };
    }
  }
  return { desc: "", empresa: "" };
}

export async function cadastrarMaterial(produto: ISincronizar, idEnderecoAtualizar:number|null) {
  const online = await isOnline();
  if (online) {
    await instance
      .put(`/enderecosdemanda/${idEnderecoAtualizar}`)
      .then(() => alert("registro realizado com sucesso"))
      .catch((erro) => console.log(erro));
    await instance
      .post(`/contagem`, produto)
      .then(async () => {})
      .catch((erro) => {
        console.log(erro);
        guardarDadosSincronizacao(produto);
      });
  } else {
    await guardarDadosSincronizacao(produto);
  }
  atualizarEndereco(produto.idEndereco)
}

export async function guardarDadosSincronizacao(dados: ISincronizar) {
  const produto: IContagem[] | undefined = await get("sincronizacaoContagem");
  if (produto) {
    const addProduto = [...produto, dados];
    update("sincronizacaoContagem", () => addProduto);
  } else {
    update("sincronizacaoContagem", () => [dados]);
  }
}

export interface ISincronizar {
  idEndereco: number;
  idSku: number;
  idDemanda: number;
  id: string;
  lote: string;
  caixas: number;
  unidade: number;
}

/* 
    id:string
    idDemanda:number
    idSku:number
    idEndereco:number
    lote:string
    caixas? :number
    unidade? : number
*/
