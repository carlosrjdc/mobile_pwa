/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InfoEtiqueta from "./pegarInfoEtiqueta";
import ListaItemsConferidos from "./listaItemsConferidos";
import { useExampleContext } from "../context";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { onSubmit } from "./functions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "./types/conferencia";
import { z } from "zod";


export default function ConferenciaTeste() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            sku: "",
            lote: "",
            quantidade: 0,
            
        },
    });

	const { dispatch, state } = useExampleContext();
	const { dispatch: acao, state: estado } = useRecebimentoContext();
	console.log(estado);

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
                                    <FormItem>
                                    <div className='flex border-2'>
                                        <FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
                                            "SKU"
                                        </FormLabel>
                                        <FormControl className='w-full '>
                                            <Input
                                                type="number"
                                                className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
                                                placeholder="SKU"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lote'
								render={({ field }) => (
                                    <FormItem>
                                    <div className='flex border-2'>
                                        <FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
                                            "LOTE"
                                        </FormLabel>
                                        <FormControl className='w-full '>
                                            <Input
                                                type="number"
                                                className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
                                                placeholder="Lote"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='quantidade'
								render={({ field }) => (
                                    <FormItem>
                                    <div className='flex border-2'>
                                        <FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
                                            "Quantidade"
                                        </FormLabel>
                                        <FormControl className='w-full '>
                                            <Input
                                                type="number"
                                                className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
                                                placeholder="Quantidade"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
								)}
							/>
							<div className='flex justify-between p-2 border rounded'>
								<InfoEtiqueta />
								<ListaItemsConferidos />
							</div>
							<div className='justify-between flex'>
								<Button className='mt-2 justify-end' type='submit'>
									FINALIZAR
								</Button>
								<Button
									onClick={() => {
										acao({
											type: "ADD_MATERIAL",
											payload: {
												produtos: {
													sku: form.getValues().sku,
													lote: form.getValues().lote,
													quantidade: form.getValues().quantidade,
												},
											},
										});
									}}
									className='mt-2 justify-end'
									type='button'>
									CADASTRAR
								</Button>
								<Button
									onClick={() => {
										acao({
											type: "REMOVE_MATERIAL",
											payload: form.getValues().sku,
										});
									}}
									className='mt-2 justify-end'
									type='button'>
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


