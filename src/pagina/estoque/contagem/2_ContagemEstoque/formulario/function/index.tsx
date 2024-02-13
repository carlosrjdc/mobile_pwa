import { useDemandaState, useProductEstoqueStore } from "@/pagina/estoque/estados";
import { useUserState } from "@/pagina/stateUser";
import {v4 as uuidv4} from "uuid"
import { VerificarEndereco, atualizarEndereco, cadastrarMaterial } from "../../function";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



  export async function onSubmit(getValues:any, reset:any,infoSku:any,ADD_PRODUCT:any,demandaId:any, router:any,idEndereco:number|null, idEnderecoAtualizar:number | null ) {
    if (demandaId) {
      const uuId = uuidv4()
      await ADD_PRODUCT({
        endereco: getValues("endereco"),
        lote: getValues("lote"),
        descricao: infoSku.desc,
        quantidade: getValues("caixas"),
        unidade: getValues("unidade"),
        sku: getValues("sku"),
        id: uuId,
        demandaId: demandaId ? demandaId : 0,
      });
      if(idEndereco){
        await cadastrarMaterial({
          idEndereco: idEndereco,
          lote: getValues("lote"),
          caixas: getValues("caixas"),
          unidade: getValues("unidade"),
          idSku: getValues("sku"),
          idDemanda: demandaId,
          id:uuId,
          
        }, idEnderecoAtualizar);

      }

      await atualizarEndereco(getValues("endereco"));
      reset();
      toast.success("Resgistro realizado com sucesso", {
        position: "bottom-center",
      });
    } else {
      await toast.error("Sem Id Associado", {
        position: "bottom-center",
        onClick: () => router.push("/estoque"),
      });
    }
  }
