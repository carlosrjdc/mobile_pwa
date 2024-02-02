import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import EditarProduto from "../Conferencia/editarItem";
import { Pencil } from "lucide-react";

type Item = {
	item: string;
	desc: string;
	Lote: string;
	quantidade: number;
};

export default function Divergencia(){

    const arrayItem = [
        {
            item: "60109822",
            desc: "Iorgute Batavo teste de tamanho de texto",
            Lote: "400176521",
            quantidade: 900,
        },
        {
            item: "70032546",
            desc: "Queijo Prato",
            Lote: "450212367",
            quantidade: 750,
        },
        {
            item: "80215439",
            desc: "Leite Condensado Itambé",
            Lote: "410045632",
            quantidade: 1200,
        },
        {
            item: "92087653",
            desc: "Manteiga Lactalis",
            Lote: "490056789",
            quantidade: 500,
        },
        {
            item: "30126784",
            desc: "Iogurte Grego Itambé",
            Lote: "430123456",
            quantidade: 1000,
        },
        {
            item: "64230987",
            desc: "Queijo Minas Frescal Lactalis",
            Lote: "470098765",
            quantidade: 600,
        },
        {
            item: "12345678",
            desc: "Leite Longa Vida Itambé",
            Lote: "480087654",
            quantidade: 800,
        },
        {
            item: "87654321",
            desc: "Iogurte Natural Lactalis",
            Lote: "440065432",
            quantidade: 950,
        },
        {
            item: "98765432",
            desc: "Requeijão Cremoso Itambé",
            Lote: "460043219",
            quantidade: 1100,
        },
        {
            item: "56789012",
            desc: "Queijo Prato Lactalis",
            Lote: "420123456",
            quantidade: 700,
        },
    ];


    return (
        <div>
            <div className="bg-primary-foreground p-2 flex justify-center"><strong>Divergencias</strong></div>
            <div>
                {arrayItem.map((item, index) => (
                    <ItemArray key={index} item={item} />
                ))}
            </div>
            
        </div>
    )
}


function ItemArray({ item }: { item: Item }) {
	return (
		<div className='relative'>
			<Card>
				<CardContent className='flex flex-col justify-center p-3 gap-2 bg-slate-100/90'>
					<div className='flex gap-4 justify-between'>
						<CardTitle className='text-lg'>{item.item}</CardTitle>
						<CardDescription>{item.desc}</CardDescription>
					</div>
					<div className='flex items-center justify-between'>
						<Label className='text-xs font-semibold'>Lote: {item.Lote}</Label>
						<Label className='text-lg font-semibold'>
							Cx:{item.quantidade}
						</Label>
						<EditarProduto
							item={item.item}
							lote={item.Lote}
							quantidade={item.quantidade}>
							<Pencil size={25} />
						</EditarProduto>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}