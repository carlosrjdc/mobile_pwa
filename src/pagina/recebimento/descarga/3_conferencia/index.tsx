/** @format */

"use client";
import { AlertOctagon } from "lucide-react";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { useProductStore } from "../../states/recebimentoState";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import FormularioConferencia from "./form";
import LerEtiquetaPorFoto from "./lerEtiquetaFoto";
import ListaItemsConferidos from "./listaItensConferidos";

//

export default function Conferencia() {
  const { dispatchPage } = useRecebimentoContext();
  const infoProduct = useProductStore((state) => state.produtos);

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
        <div
          onClick={() =>
            dispatchPage({ type: "SET_PAGE", payload: { page: "anomalia" } })
          }
          className="flex bg-red-200 m-1 rounded p-2 mt-16 items-center gap-1 justify-center"
        >
          <AlertOctagon color="red" />
          <span className="text-sm uppercase font-semibold">
            {"Registrar Anomalia  -->"}
          </span>
        </div>
      </div>
    </div>
  );
}
