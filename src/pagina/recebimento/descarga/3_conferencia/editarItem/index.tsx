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
  children,
}: {
  id: string;
  item: string;
  lote: string;
  quantidade: number;
  children?: ReactNode;
}) {
  const [sku, setSku] = useState(item);
  const [stateLote, setStateLote] = useState(lote);
  const [stateQuantidade, setStateQuantidade] = useState(quantidade);

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
                  texto="SKU:"
                  onChange={(e) => setSku(e.target.value)}
                  id="name"
                  defaultValue={item}
                  className="col-span-3 font-semibold"
                />
              </div>
              <div className="grid items-center gap-2">
                <Input
                  texto="LOTE:"
                  onChange={(e) => setStateLote(e.target.value)}
                  id="username"
                  defaultValue={stateLote}
                  className="col-span-3 font-semibold"
                />
              </div>
              <div className="grid items-center gap-2">
                <Input
                  texto="QUANTIDADE:"
                  onChange={(e) => setStateQuantidade(parseInt(e.target.value))}
                  id="username"
                  defaultValue={stateQuantidade}
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
