/** @format */

"use client";
import { RecebimentoProvider } from "@/pages/recebimento/context/contextRecebimento";
import ProcessoDescarga from "@/pages/recebimento/processoDescarga";
import { ExampleProvider } from "@/pages/recebimento/processoDescarga/context";
import { useParams } from "next/navigation";

export default function Descarga() {
	const params = useParams();
	console.log(params?.id);
	return (
		<ExampleProvider>
			<RecebimentoProvider>
				<ProcessoDescarga />
			</RecebimentoProvider>
		</ExampleProvider>
	);
}
