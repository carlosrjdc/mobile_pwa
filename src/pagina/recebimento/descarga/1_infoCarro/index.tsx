/** @format */

"use client";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormInfoCarro, IInfoCarro } from "../../types/infoCarro";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import FormularioICarro from "./formulario";

export default function InfoCarro() {
  const params = useParams();

  console.log(params);

  const form = useForm<IInfoCarro>({
    resolver: zodResolver(FormInfoCarro),
    defaultValues: {
      Ocr: "",
      Doca: "",
      Placa: "",
      Lacre: "",
    },
  });

  function onSubmit(data: IInfoCarro) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <InfoPlacaOcr />
      <div className="p-2 flex flex-1">
        <FormularioICarro />
      </div>
    </div>
  );
}
