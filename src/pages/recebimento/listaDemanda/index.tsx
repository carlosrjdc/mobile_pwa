/** @format */
"use client";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export default function ListaDemanda() {
	return (
		<div>
			<Command>
				<CommandInput placeholder='Digite a OCR...' />
				<CommandList>
					<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
					<CommandListExample text='12345' />
					<CommandListExample text='75421' />
					<CommandListExample text='87652' />
					<CommandListExample text='876521' />
					<CommandListExample text='65542' />
					<CommandListExample text='87662' />
				</CommandList>
			</Command>
		</div>
	);
}

function CommandListExample({ text }: { text: string }) {
	const router = useRouter();
	return (
		<CommandItem className='p-2 font-bold text-sm'>
			<div
				onClick={() => router.push("/recebimento/" + text)}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						router.push("/recebimento/" + text);
					}
				}}>
				{text}
			</div>
		</CommandItem>
	);
}
