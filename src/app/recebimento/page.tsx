/** @format */

import MenuSuperior from "@/components/global/menuSuperior";
import ListaDemanda from "@/pagina/recebimento/listaDemanda";

export default function Recebimento() {
  return (
    <div className="h-full flex flex-col">
      <MenuSuperior />
      <div className="flex-1"><ListaDemanda /></div>
    </div>
  );
}
