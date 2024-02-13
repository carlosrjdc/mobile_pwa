import { Html5Qrcode } from "html5-qrcode";
import { get } from "idb-keyval";
import { Dispatch, useEffect, useState } from "react";

export default function BuscaProdutorQRCode({ajustarLote,open, setOpen}:{ajustarLote:(e:string)=> void,open:boolean, setOpen:Dispatch<boolean>}){
    const [scanResult, setScanResult] = useState(null);

    async function buscarInfoIndexed(procurar: string){
        const dados = await get("produtos")
        if(dados){
            const filtrar = dados.filter((item:any)=> item.sku === parseInt(procurar) || item.ean === procurar || item.dum === procurar)[0]
            if(filtrar){
                return filtrar.sku
            }
        }

        return null
    }

	useEffect(() => {
		const scanner = new Html5Qrcode("reader")
        

		const config = { fps: 10, qrbox: { width: 250, height: 250 } };

		scanner.start({ facingMode: "environment" },config,success,error)

		async function success(result: any) {
            const infoProduto = await buscarInfoIndexed(result)
            ajustarLote(infoProduto)
            console.log(infoProduto)
			scanner.stop();
            setOpen(false)
			setScanResult(result);
		}

		function error(err: any) {
			console.warn(err);
		}   
	}, []);

    return scanResult ? <div>Sucess: {scanResult}</div> : <div id="reader"></div>
}