/** @format */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useRecebimentoContext } from "../context/contextRecebimento";

const dados = [
  {
    placa: "LLh3456",
    ocr: "3455432",
    tipo: "refrigerado",
    direcao: "carlos",
  },
  {
    placa: "LLh3457",
    ocr: "3455432",
    tipo: "refrigerado",
  },
  {
    placa: "LLh3458",
    ocr: "3421432",
    tipo: "refrigerado",
  },
];

const reservado = dados.filter((item) => item.direcao === "carlos");
const naoReservado = dados.filter((item) => item.direcao !== "carlos");

export default function ListaDemanda() {
  return (
    <div className="h-screen">
      {reservado && <div className="font-bold py-2 text-center bg-sky-500">DEDICADO</div>}
      {reservado && reservado.map((item, index) => <ItemArray key={index} item={item} />)}
      {reservado && <Separator className="my-4 bg-red-400 " />}
      {naoReservado.map((item, index) => (
        <ItemArray key={index} item={item} />
      ))}
    </div>
  );
}

function ItemArray({ item }: { item: ILista }) {
  const { dispatch, state } = useRecebimentoContext();
  const router = useRouter();

  console.log(state);

  async function cadastrarOcr(infoOcr: string, infoPlaca: string) {
    dispatch({
      type: "SET_OCR_PLACA",
      payload: { ocr: infoOcr, placa: infoPlaca },
    });
    router.push("/recebimento/" + infoOcr);
  }

  return (
    <div className="w-full">
      <Card>
        <CardContent
          onClick={() => cadastrarOcr(item.ocr, item.placa)}
          className="flex flex-col justify-center p-3 gap-2 bg-slate-100/90"
        >
          <div className="flex gap-4 justify-between">
            <CardTitle className="text-xl font-bold text-blue-700">
              {item.ocr}
            </CardTitle>
            <CardDescription>{item.tipo}</CardDescription>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-lg font-semibold">Placa: {item.placa}</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface ILista {
  placa: string;
  ocr: string;
  tipo: string;
}
