"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useDemandaState, useProductEstoqueStore } from "../../estados";
import { ToastContainer } from "react-toastify";
import { cadastrarEnderecos } from "../2_ContagemEstoque/function";
import { dadosEnderecos } from "../2_ContagemEstoque/data";
import axios from "axios";
import { IEndereco } from "../../type";

export default function ListaDemandaPage() {
  const demandas = [
    {
      demandaId: 1,
      nome: "Victor Hugo",
      status: "nao iniciado",
    },
    {
      demandaId: 1,
      nome: "Carlos Rosa",
      status: "nao iniciado",
    },
    {
      demandaId: 2,
      nome: "Cassio Capuccho",
      status: "nao iniciado",
    },
    {
      demandaId: 3,
      nome: "Carlos Rosa",
      status: "nao iniciado",
    },
    {
      demandaId: 4,
      nome: "Carlos Rosa",
      status: "nao iniciado",
    },
  ];

  const filtrado = demandas.filter((item) => item.nome === "Carlos Rosa");

  return (
    <div>
      <ToastContainer />
      <div className="p-4 flex justify-center">
        <Label>Lista Demandas</Label>
      </div>
      <Card>
        <CardContent className="flex flex-col justify-center p-3 gap-2">
          {filtrado.map((item, index) => (
            <ItemArray id={item.demandaId} status={item.status} key={index} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function ItemArray({ id, status }: { id: number; status: string }) {
  const router = useRouter();

  const ADD_ID_DEMANDA = useProductEstoqueStore((state) => state.ADD_ID_DEMANDA);

  async function addDemanda() {
    ADD_ID_DEMANDA(id);

    router.push(`/estoque/${id}`);

    /*const endereco = await axios.get(
      `http://192.168.1.4:4000/enderecosdemanda/${id}`
    );

    if (endereco) {
      await cadastrarEnderecos(endereco.data);
      router.push(`/estoque/${id}`);
    }*/

  }

  return (
    <div onClick={addDemanda} className="">
      <Card>
        <CardContent className="flex flex-col justify-center p-3 gap-2 bg-slate-100/90">
          <div className="flex gap-4 justify-between">
            <CardTitle className="text-lg">{id}</CardTitle>
            <CardDescription>{status}</CardDescription>
          </div>
          <div className="flex items-center justify-end">
            <Label className="text-xs font-semibold">19/02/2024</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
