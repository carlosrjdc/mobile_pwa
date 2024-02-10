/** @format */

"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { useProductStore } from "@/pagina/recebimento/states/recebimentoState";
import { ListTodo, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import EditarProduto from "../editarItem";


type Item = {
	id:string;
	idPallet: string;
	descricao?:string,
	sku: string;
	lote: string;
	quantidade: number;
	peso?:number;
	unidade?:number
};


export default function ListaItemsConferidos() {
    const [open, setOpen] = useState(false)
	const  products  = useProductStore((state)=> state.produtos)
       
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.shiftKey && e.key === 'J') {
          e.preventDefault()
          setOpen((open) => !open)
        }
        
      }
   
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
	return (
		<div className=''>
			<Sheet >
				<SheetTrigger asChild>
					<ListTodo onClick={()=> setOpen(true) } size={50} className='p-2' />
				</SheetTrigger>
				<SheetContent className='h-5/6 p-2' side='bottom'>
					<SheetHeader>
						<SheetTitle>Items conferidos</SheetTitle>
					</SheetHeader>
					{products && <ScrollArea className='h-full rounded-md '>
						<div className='grid gap-2 py-4'>
							{products.map((item, index) => (
								<ItemArray key={index} item={item} />
							))}
						</div>
						<ScrollBar hidden />
					</ScrollArea>}
				</SheetContent>
			</Sheet>
		</div>
	);
}

function ItemArray({ item }: { item: Item }) {
	return (
		<div className=''>
			<Card>
				<CardContent className='flex flex-col justify-center p-3 gap-2 bg-slate-100/90'>
					<div className='flex gap-4 justify-between'>
						<CardTitle className='text-lg'>{item.sku}</CardTitle>
						<CardDescription>{item.descricao}</CardDescription>
					</div>
					<div className='flex items-center justify-between'>
						<Label className='text-xs font-semibold'>Lote: {item.lote}</Label>
						<Label className='text-lg font-semibold'>
							Cx:{item.quantidade}
						</Label>
						<EditarProduto
                            id={item.id}
							item={item.sku}
							lote={item.lote}
							quantidade={item.quantidade}
							peso={item.peso? item.peso : 0}
							unidade={item.unidade ? item.unidade : 0}
							>
							<Pencil size={25} />
						</EditarProduto>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
