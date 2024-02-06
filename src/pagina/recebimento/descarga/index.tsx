import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRecebimentoContext } from "../context/contextRecebimento";
import InfoCarro from "./1_infoCarro";
import InfoTemperatura from "./2_temperTUR";
import Conferencia from "./3_conferencia";
import Anomalia from "./4_anomalia";

export default function Descarga() {
    const {statePage} = useRecebimentoContext() 
  return (
    <div> 
    <Tabs value={statePage.page} className="">
      <TabsList className=" hidden w-full grid-cols-3">
        <TabsTrigger value="info_temperatura">Info</TabsTrigger>
        <TabsTrigger value="conferencia">dois</TabsTrigger>
        <TabsTrigger value="anomalia">Anomalia</TabsTrigger>
        <TabsTrigger value="validacao">Validação</TabsTrigger>
      </TabsList>
      <TabsContent value="info_carro">
        <InfoCarro />
      </TabsContent>
      <TabsContent value="info_temperatura">
        <InfoTemperatura/>
      </TabsContent>
      <TabsContent value="conferencia">
        <Conferencia/>
      </TabsContent>
      <TabsContent value="anomalia">
        <Anomalia/>
      </TabsContent>
    </Tabs>
    </div>
  );
}
