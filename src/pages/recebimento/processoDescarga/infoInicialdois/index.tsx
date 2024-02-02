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
import { useExampleContext } from "../context";
import { useRecebimentoContext } from "../../context/contextRecebimento";

const FormSchema = z.object({
	temperatura: z.number()
});

export default function InfoInicialDois() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			temperatura: 0
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
		<div className='flex flex-col min-h-screen'>
			<div className='p-2 flex flex-1'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className=''>
						<FormField
							control={form.control}
							name='temperatura'
							render={({ field }) => (
								<FormItemSub field={field} text='Temperatura' type='number' />
							)}
						/>
						<div className='mt-4 gap-2 flex items-center'>
							<FormLabel>Carreta Aberta</FormLabel>
							<Input type='file' />
						</div>

						<Button
							onClick={() => {
								acao({ type: "SET_INFO_TEMPERATURA", payload: {
									temperatura: form.getValues().temperatura,

								} });
								dispatch({ type: "SET_PAGE", payload: "material" });
							}}
							className='mt-2 justify-end'
							type='submit'>
							PROXIMA
						</Button>
					</form>
				</Form>
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
