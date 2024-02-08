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
import useInfoCarStore from "../states/recebimentoState";

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
      {reservado && <div className="font-semibold py-2 text-center bg-secondary-foreground text-secondary my-1">DEDICADO</div>}
      {reservado && reservado.map((item, index) => <ItemArray key={index} item={item} />)}
      {reservado && <Separator className="my-3 bg-secondary " />}
      {naoReservado.map((item, index) => (
        <ItemArray key={index} item={item} />
      ))}
    </div>
  );
}

function ItemArray({ item }: { item: ILista }) {
  const infoCarro = useInfoCarStore((state)=> state.infoCarro)
  const SET_OCR_PLACA = useInfoCarStore((state)=> state.SET_OCR_PLACA)


  const router = useRouter();

  async function cadastrarOcr(infoOcr: string, infoPlaca: string) {
    const verificarHorario = infoCarro.inicioDescarga === null ? new Date() : infoCarro.inicioDescarga
    SET_OCR_PLACA({ocr: infoOcr, placa: infoPlaca, horarioInicio:verificarHorario  });
    router.push("/recebimento/" + infoOcr);
  }

  return (
    <div className="mx-1 my-2">
      <Card>
        <CardContent
          onClick={() => cadastrarOcr(item.ocr, item.placa)}
          className="flex flex-col justify-center p-3 gap-2 bg-slate-100/90"
        >
          <div className="flex gap-4 justify-between">
            <CardTitle className="text-xl font-bold text-primary ">
              {item.ocr}
            </CardTitle>
            <CardDescription>{item.tipo}</CardDescription>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-lg text-secondary-foreground font-semibold">Placa: {item.placa}</Label>
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
