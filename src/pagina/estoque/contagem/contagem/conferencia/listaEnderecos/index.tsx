import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { enderecos } from "./data";

export default function ListaDemandaEnderecos() {
  return (
    <div>
      <ScrollArea className="h-[750px] w-full rounded-md border p-4">
      <Card>
        <CardContent className="flex flex-col justify-center p-3 gap-2">
        {enderecos.map((item, index) => (
          <ItemArray item={item} />
        ))}
        </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}

function ItemArray({ item }: { item: Enderecos }) {
  return (
    <div className="">
      <Card>
        <CardContent className="flex flex-col justify-center p-3 gap-2 bg-slate-100/90">
          <div className="flex gap-4 justify-between">
            <CardTitle className="text-lg">{item.endereco}</CardTitle>
            <CardDescription>{item.demanda}</CardDescription>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-xs font-semibold">{item.data}</Label>
            <Label className={`text-xs font-semibold ${item?.status === "contado" ? "uppercase text-green-400":""}`}>{item?.status}</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type Enderecos = {
  endereco: string;
  tipo: string;
  data: string;
  demanda: number;
  status?:string
};
