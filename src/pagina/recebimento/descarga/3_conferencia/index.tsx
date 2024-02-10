/** @format */

"use client";
import { Button } from "@/components/ui/button";
import instance from "@/config/http";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import useInfoCarStore, { useProductStore } from "../../states/recebimentoState";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import FormularioConferencia from "./form";
import LerEtiquetaPorFoto from "./lerEtiquetaFoto";
import ListaItemsConferidos from "./listaItensConferidos";

//

export default function Conferencia() {
  const { dispatchPage } = useRecebimentoContext();
  const infoProduct = useProductStore((state) => state.produtos);
  const infoCar = useInfoCarStore((state)=> state.infoCarro)

  function cadastrar(){
    return instance.post(`/lote`,{info:infoCar,produtos:infoProduct})
  }


  return (
    <div className="flex flex-col w-full min-h-screen">
      <InfoPlacaOcr />
      <div className="p-2 flex w-full">
        <FormularioConferencia />
      </div>
      

      <div className="flex justify-between p-2 mx-1 mt-4 border rounded">
        <LerEtiquetaPorFoto />
        <div className="relative">
          <ListaItemsConferidos />
          {infoProduct.length > 0 && (
            <div>
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900">
                {infoProduct.length}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <Button onClick={()=> cadastrar()}>post</Button>
      </div>
    </div>
  );
}
