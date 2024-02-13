/** @format */
"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProductEstoqueStore } from "@/pagina/estoque/estados";
import { CheckCircle2, Trash2 } from "lucide-react";
import { ReactNode, useState } from "react";
import { EditarProduto } from "./function";

export default function EditarProdutoContagem({
  demandaId,
  id,
  endereco,
  sku,
  empresa,
  descricao,
  lote,
  quantidade,
  unidade,
  children,
}: {
  demandaId: number;
  id: string;
  endereco: string;
  sku: string;
  empresa?: string;
  descricao?: string;
  lote: string;
  quantidade: number;
  unidade?: number;
  children?: ReactNode;
}) {
  //STATE
  const [stateLote, setStateLote] = useState(lote);
  const [stateQuantidade, setStateQuantidade] = useState(quantidade);
  const [stateUnidade, setStateUnidade] = useState(unidade);

  //ACOES
  const REMOVE_PRODUCT = useProductEstoqueStore(
    (state) => state.REMOVE_PRODUTO
  );
  const UPDATE_PRODUCT = useProductEstoqueStore(
    (state) => state.UPDATE_PRODUTO
  );

  return (
    <div className="flex relative">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className="bg-secondary flex flex-col justify-center items-center mt-2 rounded py-2">
            <SheetTitle className="uppercase">Editar Item</SheetTitle>
            <Separator />
            <SheetTitle className="uppercase">{descricao}</SheetTitle>
          </SheetHeader>
          <div className="px-2 py-4 border rounded">
            <div className="grid gap-1">
              <div className="grid items-center gap-4 ">
                <Input
                  disabled
                  texto="SKU:"
                  id="sku"
                  defaultValue={sku}
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
              </div>
            </div>
          </div>
          <SheetFooter className="mt-4">
            <SheetClose>
              <div className="flex justify-between px-2">
                <Trash2
                  size={40}
                  onClick={() => REMOVE_PRODUCT(id)}
                  color="red"
                />
                <CheckCircle2
                  size={40}
                  onClick={async () => {
                    await EditarProduto(
                      id,
                      stateLote,
                      stateQuantidade,
                      stateUnidade ? stateUnidade : 0
                    );
                    UPDATE_PRODUCT({
                      id: id,
                      lote: stateLote,
                      quantidade: stateQuantidade,
                      unidade: stateUnidade ? stateUnidade : 0,
                    });
                  }}
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
