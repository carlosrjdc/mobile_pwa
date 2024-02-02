/** @format */

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { get, set } from "idb-keyval";
import { update } from 'idb-keyval';
import { useState } from "react";


export default function Expedicao() {

    const [texto, setTexto] = useState("")

    const dados = {
        nome: "teste",
        idade: 20
    }

	function addCache() {
		set(texto, JSON.stringify(dados));
	}

    function atualizar(){
        update(texto, (val)=>  JSON.stringify({nome:"Carlos", idadeo:34}))
    }

	function Buscar() {
		get(texto).then((val) => {
			console.log(JSON.parse(val));
		});
	}

	return (
		<div>
            <Input onChange={(e)=> setTexto(e.target.value)}/>
			<Button onClick={addCache}>guardar</Button>
            <Button onClick={Buscar}>buscar</Button>
            <Button onClick={atualizar}>atualizar</Button>
		</div>

	);
}
