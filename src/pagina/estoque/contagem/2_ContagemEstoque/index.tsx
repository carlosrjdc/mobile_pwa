'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDemandaState, usePageContagemEstoque, useProductEstoqueStore } from "../../estados";
import FormularioContagem from "./formulario";
import ItensConferidos from "./itensConferidos";
import Sincronizar from "./sincronizar";
import FormularioContagemPage from "@/pagina/contagemestoque/formulario";


export default function ContagemEstoque() {


    const statePage = useProductEstoqueStore(state => state.produto) 

  return (
    <div> 
      <div className="flex justify-center p-2 m-1 bg-primary rounded text-secondary font-bold text-xl">ID: {statePage.demandaId}</div>
    <Tabs defaultValue="conferencia" className="">
      <TabsList className=" w-full py-6 bg-green-400  grid-cols-3">
        <TabsTrigger value="conferencia">Contagem</TabsTrigger>
        <TabsTrigger value="lista">Contados</TabsTrigger>
        <TabsTrigger value="sincronizar">Sincronizar</TabsTrigger>
        <TabsTrigger value="finalizar">Finalizar</TabsTrigger>
      </TabsList>
      <TabsContent value="conferencia">
        <FormularioContagemPage />
      </TabsContent>
      <TabsContent value="lista">
      <ItensConferidos/>
      </TabsContent>
      <TabsContent value="sincronizar">
      <div><Sincronizar/></div>
      </TabsContent>
    </Tabs>
    </div>
  );
}
