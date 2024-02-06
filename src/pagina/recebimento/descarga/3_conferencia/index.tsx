/** @format */

"use client";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import FormularioConferencia from "./form";
import LerEtiquetaPorFoto from "./lerEtiquetaFoto";
import ListaItemsConferidos from "./listaItensConferidos";

export default function Conferencia() {
  const { dispatchPage, state } = useRecebimentoContext();
  console.log(state);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <InfoPlacaOcr />
      <div className="p-2 flex w-full">
        <FormularioConferencia />
      </div>

      <div className="flex justify-between p-2 mx-1 mt-4 border rounded">
        <LerEtiquetaPorFoto />
        <ListaItemsConferidos />
      </div>

    </div>
  );
}
