/** @format */
"use client";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

//imagens
import { useSession } from "next-auth/react";
import imgCarrinho from "../../assets/carrinho.png";
import imgDevolucao from "../../assets/devolucao.png";
import imgRecebimento from "../../assets/entrega.png";
import imgInventario from "../../assets/inventario.png";

export default function MenuPrincipal_Page() {

	const session = useSession()
	console.log(session )
	const infoGap = 4;
	const gapVertical = 4;

	return (
		<div
			className={`flex flex-col gap-${gapVertical} justify-center`}
			>
			<strong className='bg-primary-foreground text-center mt-2 text-xl'>
				MENU
			</strong>
			<div
				className={`flex flex-wrap gap-${infoGap} justify-center items-center`}>
				<ItemMenu
					image={imgRecebimento}
					titulo='RECEBIMENTO'
					rota='/recebimento'
					focus={true}
					index={1}
				/>
				<ItemMenu image={imgInventario} titulo='ESTOQUE' rota='/estoque' index={2} />
				<ItemMenu image={imgDevolucao} titulo='DEVOLUCAO' rota='/devolucao' index={3} />
				<ItemMenu image={imgCarrinho} titulo='EXPEDICAO' rota='/expedicao' index={4} />
			</div>
		</div>
	);
}

interface ItemMenuType extends HTMLAttributes<HTMLDivElement> {
	image: StaticImageData;
	rota: string;
	titulo: string;
	index:number,
	referencia?: any;
	focus?: boolean;
}

function ItemMenu({
	image,
	rota,
	titulo,
	focus = false,
	index,
	referencia,
	...rest
}: ItemMenuType) {
	const router = useRouter();
	const myDivRef = useRef<HTMLDivElement>(null);
	const [selecionado, setSelecionado] = useState(0)


	const menus = ["RECEBIMENTO", "ESTOQUE", "DEVOLUCAO", "EXPEDICAO"]

	useEffect(() => {
		// Dá foco à div quando o componente é montado
		if (myDivRef.current) {
			myDivRef.current.focus();
		}
	}, [selecionado]);


	const handleKeyDown = (e: any) => {
	  
		if (e.key === "ArrowLeft") {
		  setSelecionado((prevSelecionado) => prevSelecionado - 1);
		} else if (e.key === "ArrowRight" /* Coloque o número total de itens - 1 */) {
		  setSelecionado((prevSelecionado) => prevSelecionado + 1);
		}
	  };
	  
	  useEffect(() => {
		const divElement = document.getElementById(menus[selecionado]);
		divElement?.focus();
		console.log(selecionado);
	  }, [selecionado]);
	  
	  useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
	  
		return () => {
		  window.removeEventListener("keydown", handleKeyDown);
		};
	  }, [selecionado]);

	return (
		<div
			{...rest}
			id={titulo}
			tabIndex={index}
			ref={referencia}
			onClick={() => router.push(rota)}
			onKeyDown={(event) => {
				if (event.key === 'Enter') {
					router.push(rota)
				}
			}}
			

			className={`flex flex-col justify-center w-32  items-center border px-4 py-2 rounded focus:p-2 focus:border-2 focus:border-primary-foreground focus:bg-neutral-500/20
			`}>
			<Image className='h-20 w-20' src={image} alt='logo' />
			<div>{titulo}</div>
		</div>
	);
}
