import { get } from "idb-keyval";
import { useEffect, useState } from "react";

export default function Sincronizar() {
  const [itensSicronizar, setItensSincronizar] = useState<any[]>([]);

  async function buscarDados() {
    const dados = await get("sincronizacaoContagem");
    if (dados) {
      setItensSincronizar(dados);
    }
  }

  useEffect(() => {
    buscarDados();
  }, []);
  return (
    <div>
      {itensSicronizar.map((item) => (
        <div className="flex justify-between items-center p-2   ">
          <div>{item.endereco}</div>
          <div>{item.sku}</div>
        </div>
      ))}
    </div>      
  );
}
