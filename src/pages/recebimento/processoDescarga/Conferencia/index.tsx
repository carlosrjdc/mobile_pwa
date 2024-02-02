/** @format */

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import InfoEtiqueta from "./pegarInfoEtiqueta";
import ListaItemsConferidos from "./listaItemsConferidos";
import { useExampleContext } from "../context";
import { useRecebimentoContext } from "../../context/contextRecebimento";

const FormSchema = z.object({
	sku: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	lote: z.string().min(2, {
		message: "Doca must be at least 2 characters.",
	}),
	quantidade: z.number()
});

export default function Conferencia() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			sku: "",
			lote: "",
			quantidade: 0,
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	const { dispatch, state } = useExampleContext();
	const { dispatch: acao, state: estado } = useRecebimentoContext();
	console.log(estado)

	return (
		<div>
			<div className='flex flex-col min-h-screen'>
				<div className='p-2 flex flex-1'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className=''>
							<FormField
								control={form.control}
								name='sku'
								render={({ field }) => (
									<FormItemSub field={field} text='SKU' type='number' />
								)}
							/>
							<FormField
								control={form.control}
								name='lote'
								render={({ field }) => (
									<FormItemSub field={field} text='Lote' type='number' />
								)}
							/>
							<FormField
								control={form.control}
								name='quantidade'
								render={({ field }) => (
									<FormItemSub field={field} text='Quantidade' type='number' />
								)}
							/>
							<div className='flex justify-between p-2 border rounded'>
								<InfoEtiqueta />
								<ListaItemsConferidos />
							</div>
                            <div className="justify-between flex">
							<Button className='mt-2 justify-end' type='submit'>
								FINALIZAR
							</Button>
                            <Button onClick={()=> {
								acao({type:"ADD_MATERIAL", payload: {produtos:{sku:form.getValues().sku, lote:form.getValues().lote, quantidade:form.getValues().quantidade}}})
								
							}} className='mt-2 justify-end' type='button'>
								CADASTRAR
							</Button>
							<Button onClick={()=> {
								acao({type:"REMOVE_MATERIAL", payload:form.getValues().sku})
							}} className='mt-2 justify-end' type='button'>
								DELETAR
							</Button>
                            </div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}

function FormItemSub({
	field,
	text,
	type,
}: {
	field: any;
	text: string;
	type: string;
}) {
	return (
		<FormItem>
			<div className='flex border-2'>
				<FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
					{text}
				</FormLabel>
				<FormControl className='w-full '>
					<Input
						type={type}
						className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
						placeholder={text}
						{...field}
					/>
				</FormControl>
			</div>
			<FormMessage />
		</FormItem>
	);
}
