/** @format */

"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { useContext, useState } from "react";
import InfoInicial from "./infoInicial";
import InfoInicialDois from "./infoInicialdois";
import Conferencia from "./Conferencia";
import Divergencia from "./divergencia";
import { ExampleContext, ExampleProvider, useExampleContext } from "./context";
import { Button } from "@/components/ui/button";
import { useRecebimentoContext } from "../context/contextRecebimento";
import ConferenciaTeste from "./Conferencia/cadastro";

export default function ProcessoDescarga() {
	const [aba, setAba] = useState("info");
	const { dispatch, state } = useExampleContext();
	const {dispatch:acao, state:estado } = useRecebimentoContext()

	console.log(state.currentPage);

	return (
		<div>
			<Tabs value={state.currentPage} className=''>
				<TabsList className=' hidden w-full grid-cols-3'>
					<TabsTrigger onClick={() => setAba("info")} value='info'>
						Info
					</TabsTrigger>
					<TabsTrigger onClick={() => setAba("dois")} value='dois'>
						dois
					</TabsTrigger>
					<TabsTrigger onClick={() => setAba("material")} value='material'>
						Material
					</TabsTrigger>
					<TabsTrigger onClick={() => setAba("validacao")} value='validacao'>
						Validação
					</TabsTrigger>
				</TabsList>
				<TabsContent value='info'>
					<InfoInicial />
				</TabsContent>
				<TabsContent value='dois'>
					<InfoInicialDois />
					<Button
						onClick={() =>
							dispatch({ type: "SET_PAGE", payload: "validacao" })
						}>
						clicar
					</Button>
				</TabsContent>
				<TabsContent value='material'>
					<ConferenciaTeste />
				</TabsContent>
				<TabsContent value='validacao'>
					<div>oie</div>
					<Button
						onClick={() => dispatch({ type: "SET_PAGE", payload: "dois" })}>
						clicar
					</Button>
				</TabsContent>
			</Tabs>
		</div>
	);
}
