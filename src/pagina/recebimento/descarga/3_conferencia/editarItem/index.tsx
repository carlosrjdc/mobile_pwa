/** @format */
"use client";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProductStore } from "@/pagina/recebimento/states/recebimentoState";
import { CheckCircle2, Trash2 } from "lucide-react";
import { ReactNode, useState } from "react";

export default function EditarProduto({
  id,
  item,
  lote,
  quantidade,
  unidade,
  peso,
  children,
}: {
  id: string;
  item: string;
  lote: string;
  quantidade: number;
  unidade:number;
  peso:number;
  children?: ReactNode;
}) {
  const [sku, setSku] = useState(item);
  const [stateLote, setStateLote] = useState(lote);
  const [stateQuantidade, setStateQuantidade] = useState(quantidade);
  const [statePeso, setStatePeso] = useState(peso);
  const [stateUnidade, setStateUnidade] = useState(unidade);

  const REMOVE_PRODUCT = useProductStore((state) => state.REMOVE_PRODUTO);
  const UPDATE_PRODUCT = useProductStore((state) => state.UPDATE_PRODUTO);

  return (
    <div className="flex relative">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className="bg-secondary mt-2 rounded py-2">
            <SheetTitle>Editar Item</SheetTitle>
          </SheetHeader>
          <div className="px-2 py-4 border rounded">
            <div className="grid gap-1">
              <div className="grid items-center gap-4 ">
                <Input
                  disabled
                  texto="SKU:"
                  onChange={(e) => setSku(e.target.value)}
                  id="sku"
                  defaultValue={item}
                  className="col-span-3 font-semibold"
                />
              </div>
              <div className="grid items-center gap-2">
                <Input
                  texto="LOTE:"
                  onChange={(e) => setStateLote(e.target.value)}
                  id="lote"
                  defaultValue={stateLote}
                  className="col-span-3 font-semibold"
                />
              </div>
              <div className="grid items-center gap-2">
                <Input
                  texto="CAIXAS:"
                  onChange={(e) => setStateQuantidade(parseInt(e.target.value))}
                  id="quantidade"
                  defaultValue={stateQuantidade}
                  className="col-span-3 font-semibold"
                />
                <Input
                  texto="UNIDADES:"
                  onChange={(e) => setStateUnidade(parseInt(e.target.value))}
                  id="unidade"
                  defaultValue={stateUnidade}
                  className="col-span-3 font-semibold"
                />
                <Input
                  texto="PESO:"
                  onChange={(e) => setStatePeso(parseFloat(e.target.value))}
                  id="peso"
                  defaultValue={statePeso}
                  className="col-span-3 font-semibold"
                />
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <div className="flex justify-between px-2">
                <Trash2 onClick={() => REMOVE_PRODUCT(id)} color="red" />
                <CheckCircle2
                  onClick={() =>
                    UPDATE_PRODUCT({
                      id: id,
                      lote: stateLote,
                      quantidade: stateQuantidade,
                      peso:statePeso,
                      unidade:stateUnidade

                    })
                  }
                  color="green"
                />
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
