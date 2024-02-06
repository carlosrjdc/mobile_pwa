/** @format */
'use client'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRecebimentoContext } from "@/pagina/recebimento/context/contextRecebimento";
import { CheckCircle2, Trash2 } from "lucide-react";
import { ReactNode, useState } from "react";

export default function EditarProduto({
    id,
  item,
  lote,
  quantidade,
  children,
}: {
    id:string
  item: string;
  lote: string;
  quantidade: number;
  children?: ReactNode;
}) {

    const[sku, setSku] = useState(item)
    const [stateLote, setStateLote] = useState(lote)
    const [stateQuantidade,setStateQuantidade] = useState(quantidade)

    const { dispatch } = useRecebimentoContext()

  return (
    <div className="flex relative">
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] absolute ">
          <DialogHeader className="bg-primary-foreground py-4">
            <DialogTitle>Editar Item</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2 py-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-xl">
                SKU
              </Label>
              <Input
                onChange={(e)=> setSku(e.target.value)}
                id="name"
                defaultValue={item}
                className="col-span-3 text-xl"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="username" className="text-right text-xl">
                Lote
              </Label>
              <Input
                onChange={(e)=> setStateLote(e.target.value)}
                id="username"
                defaultValue={stateLote}
                className="col-span-3 text-xl"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="username" className="text-right text-xl">
                QTD
              </Label>
              <Input
                onChange={(e)=> setStateQuantidade(parseInt(e.target.value))}
                id="username"
                defaultValue={stateQuantidade}
                className="col-span-3 text-xl"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <div className="flex justify-between px-2">
                <Trash2 onClick={()=> dispatch({type:"REMOVE_MATERIAL", payload:id})} color="red" />
                <CheckCircle2 onClick={()=> dispatch({type:"UPDATE_MATERIAL", payload:{id:id, lote:stateLote, quantidade:stateQuantidade, sku:sku}})} color="green" />
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
