"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tabela } from "@/data/produto";
import { zodResolver } from "@hookform/resolvers/zod";
import { update } from "idb-keyval";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { useInfoPageStore } from "../../states/pageState";
import { default as useBearStore } from "../../states/recebimentoState";

//TIPAGEM
const schema = z.object({
  doca: z.string(),
  lacre: z.string(),
});

type Schema = z.infer<typeof schema>;

export default function FormularioICarro() {
  //CONTEXT
  const { dispatchPage } = useRecebimentoContext();
  const infoCarro = useBearStore((state) => state.infoCarro);
  const setInfoCarro = useBearStore((state) => state.SET_INFO_INICIAL);
  const SET_PAGE = useInfoPageStore((state) => state.SET_PAGE);

  //STATE
  const [arquivoCarreta, setArquivoCarreta] = useState<File | null>(null);
  const [arquivoLacre, setArquivoLacre] = useState<File | null>(null);

  //NAVIGATE
  const router = useRouter();

  //HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      doca: infoCarro.doca,
      lacre: infoCarro.lacre,
    },
  });

  //INDEXDB


  //ONSUBMIT
  const onSubmit = (data: Schema) => {
    setInfoCarro({
      doca: data.doca,
      lacre: data.lacre,
      fotoCarretaFechada: arquivoCarreta,
      fotoLacre: arquivoLacre,
    });
    dispatchPage({ type: "SET_PAGE", payload: { page: "info_temperatura" } });
  };

  //info_temperatura

  //FUNCTION
  function handleFileChangeLacre(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setArquivoLacre(e.target.files[0]);
    }
  }

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
      <Input texto="DOCA" {...register("doca")} />
      <Input texto="LACRE" {...register("lacre")} />

      <Input
      className="file:w-16 file:h-8 file:hidden flex item-center"
        onChange={(event) => {
          handleFileChangeCarreta(event);
        }}
        texto="Carreta fechada"
        type="file"
      />
      <Input
        className="file:w-16 file:h-8 file:hidden flex item-center"
        onChange={(event) => {
          handleFileChangeLacre(event);
        }}
        texto="Lacre"
        type="file"
      />
      <div className="flex justify-between mt-4">
        <Button onClick={() => router.push("/recebimento")} type="button">
          VOLTAR
        </Button>
        <Button className="" type="submit">
          CADASTRAR
        </Button>
      </div>
    </form>
  );
}
