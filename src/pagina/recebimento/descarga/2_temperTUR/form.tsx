"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { default as useBearStore, default as useInfoCarStore } from "../../states/recebimentoState";

const schema = z.object({
  temperatura: z.number(),
});

type Schema = z.infer<typeof schema>;

//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}

export default function FormularioInfoTemperatura() {
	const { dispatchPage } = useRecebimentoContext();
  const infoCarro = useInfoCarStore((state) => state.infoCarro);
  const setInfoCarro = useBearStore((state) => state.SET_INFO_TEMPERATURA);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
	defaultValues:{
		temperatura: infoCarro.temperatura
	}
  });



  const [arquivoCarreta, setArquivoCarreta] = useState<File | null>(null);

  const onSubmit = (data: Schema) => {
    setInfoCarro({
        temperatura: data.temperatura,
        fotoCarretaAberta: arquivoCarreta,
    });
    dispatchPage({ type: "SET_PAGE", payload: { page: "conferencia" } });
  };
  

  function handleFileChangeCarreta(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setArquivoCarreta(e.target.files[0]);
    }
  }

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        texto="Temperatura"
        {...register("temperatura", { valueAsNumber: true })}
      />
      <Input
        onChange={(e) => handleFileChangeCarreta(e)}
        texto="Carreta Aberta"
        type="file"
      />
      <div className="flex justify-between mt-4">
        <Button onClick={()=> dispatchPage({type:"SET_PAGE", payload:{page:"info_carro"}})} type="button">VOLTAR</Button>
        <Button type="submit">PROXIMA</Button>
      </div>
    </form>
  );
}
