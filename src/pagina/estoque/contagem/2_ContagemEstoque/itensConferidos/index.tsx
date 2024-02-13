import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useProductEstoqueStore } from "@/pagina/estoque/estados";
import { Pencil } from "lucide-react";
import EditarProdutoContagem from "../editarProduto";

export default function ItensConferidos() {
  const itensConferidos = useProductEstoqueStore((state) => state.produtos);

  return (
    <div>
      {itensConferidos && (
        <div className="grid gap-2 py-4">
          {itensConferidos.map((item, index) => (
            <ItemArray key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function ItemArray({ item }: { item: Item }) {
  return (
    <div className="">
      <Card>
        <CardContent className="flex flex-col justify-center p-3 gap-2 bg-slate-100/90">
          <div className="flex gap-4 justify-between">
            <CardTitle className="text-lg">{item.sku}</CardTitle>
            <CardDescription>{item.descricao}</CardDescription>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-xs font-semibold">Lote: {item.lote}</Label>
            <Label className="text-lg font-semibold">
              Cx:{item.caixas}
            </Label>
            <EditarProdutoContagem
              demandaId={item.demandaId ? item.demandaId : 0}
              endereco={item.endereco}
              id={item.id}
              lote={item.lote}
              quantidade={item.caixas}
              sku={item.sku}
              unidade={item.unidade}
              descricao={item.descricao}
              empresa={item.empresa}
            >
              <Pencil />
            </EditarProdutoContagem>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type Item = {
  demandaId?: number;
  id: string;
  endereco: string;
  sku: string;
  empresa?: string;
  descricao?: string;
  lote: string;
  caixas: number;
  unidade?: number;
};
