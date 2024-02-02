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
	Ocr: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	Doca: z.string().min(2, {
		message: "Doca must be at least 2 characters.",
	}),
	Placa: z.string().length(7, {
		message: "Placa must be 7 characters.",
	}),
	Lacre: z.string().min(3, {
		message: "Lacre must be 3 characters.",
	}),
	Foto: z.instanceof(FileList).transform((value) => value[0]),
});

export default function InfoInicial() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			Ocr: "",
			Doca: "",
			Placa: "",
			Lacre: "",
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

	console.log(estado);

	return (
		<div className='flex flex-col min-h-screen'>
			<div className='p-2 flex flex-1'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className=''>
						<FormField
							control={form.control}
							name='Ocr'
							render={({ field }) => (
								<FormItem>
								<div className='flex border-2'>
									<FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
										"Ocr"
									</FormLabel>
									<FormControl className='w-full '>
										<Input
											type="number"
											className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
											placeholder="OCR"
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
							name='Doca'
							render={({ field }) => (
								<FormItem>
								<div className='flex border-2'>
									<FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
										"Doca"
									</FormLabel>
									<FormControl className='w-full '>
										<Input
											type="number"
											className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
											placeholder="Doca"
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
							name='Placa'
							render={({ field }) => (
								<FormItem>
								<div className='flex border-2'>
									<FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
										"Placa"
									</FormLabel>
									<FormControl className='w-full '>
										<Input
											type="number"
											className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
											placeholder="Placa"
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
							name='Lacre'
							render={({ field }) => (
								<FormItem>
								<div className='flex border-2'>
									<FormLabel className='text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400'>
										"Lacre"
									</FormLabel>
									<FormControl className='w-full '>
										<Input
											type="number"
											className='text-sm font-semibold items-center border rounded-r flex focus:outline-none'
											placeholder="Lacre"
											{...field}
										/>
									</FormControl>
								</div>
								<FormMessage />
							</FormItem>
							)}
						/>
						<div className='mt-4 gap-2 flex items-center'>
							<FormLabel> Carreta Fechada</FormLabel>
							<Input type='file' />
						</div>
						<div className='mt-4 gap-2 flex items-center'>
							<FormLabel>Lacre</FormLabel>
							<Input type='file' />
						</div>
						<Button
							onClick={() => {
								acao({
									type: "SET_INFO_INICIAL",
									payload: {
										doca: form.getValues("Doca"),
										placa: form.getValues("Placa"),
										lacre: form.getValues("Lacre"),
										ocr: form.getValues("Ocr"),
										fotoCarretaFechada: form.getValues("Foto"),
									},
								});

								dispatch({ type: "SET_PAGE", payload: "dois" });
							}}
							className='mt-2 justify-end'
							type='button'>
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
