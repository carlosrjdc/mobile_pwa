import { Html5Qrcode } from "html5-qrcode";
import { get } from "idb-keyval";
import { Dispatch, useEffect, useState } from "react";
import { useQrCodeState } from "../state";

export default function BuscaEndeecorQRCode({ajustarLote,open, setOpen}:{ajustarLote:(e:string)=> void,open:boolean, setOpen:Dispatch<boolean>}){
    const [scanResult, setScanResult] = useState(null);

    const UPDATE_QR_SKU = useQrCodeState((state)=> state.UPDATE_QR_SKU)

    async function buscarInfoIndexed(procurar: string){
        const dados = await get("endereco")
        if(dados){
            const filtrar = dados.filter((item:any)=> item.endereco === procurar)[0]
            if(filtrar){
                return filtrar.endereco
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
			scanner.stop();
            setOpen(false)
            setTimeout(function() {
                // Insira aqui a próxima ação que você deseja executar
                UPDATE_QR_SKU(true)
            }, 1000);
            
			setScanResult(result);
		}

		function error(err: any) {
			console.warn(err);
		}   
	}, []);

    return scanResult ? <div>Sucess: {scanResult}</div> : <div id="reader"></div>
}