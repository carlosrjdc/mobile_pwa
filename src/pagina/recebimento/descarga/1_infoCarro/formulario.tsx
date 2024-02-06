"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRecebimentoContext } from "../../context/contextRecebimento";

const schema = z.object({
  doca: z.string(),
  lacre: z.string(),
});

type Schema = z.infer<typeof schema>;

//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}

export default function FormularioICarro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const {dispatch, state, dispatchPage} = useRecebimentoContext()

  const [arquivoCarreta, setArquivoCarreta] = useState<File | null>(null)
  const [arquivoLacre, setArquivoLacre] = useState<File | null>(null)


  const onSubmit = (data: Schema) => {
    dispatch({type:"SET_INFO_INICIAL", payload:{doca: data.doca, lacre:data.lacre, fotoCarretaFechada:arquivoCarreta, fotoLacre:arquivoLacre}})
    dispatchPage({type:"SET_PAGE", payload:{page:"info_temperatura"}})
  };

  function handleFileChangeLacre(e: ChangeEvent<HTMLInputElement>){
    if(e.target.files && e.target.files.length > 0){
      setArquivoLacre(e.target.files[0])
    }
  }

  function handleFileChangeCarreta(e: ChangeEvent<HTMLInputElement>){
    if(e.target.files && e.target.files.length > 0){
      setArquivoCarreta(e.target.files[0])
    }
  }



  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input texto="DOCA" {...register("doca")} />
      <Input texto="LACRE" {...register("lacre")} />

      <Input onChange={(e)=>handleFileChangeCarreta(e)} texto="Carreta fechada" type="file"/>
      <Input onChange={(e)=> handleFileChangeLacre(e)} texto="Lacre" type="file"/>
      <Button type="submit">CADASTRAR</Button>
    </form>
  );
}
