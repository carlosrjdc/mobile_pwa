"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITabela, tabela } from "@/data/produto";
import { zodResolver } from "@hookform/resolvers/zod";
import { get, set } from "idb-keyval";
import { Frown } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uudiv4 } from "uuid";
import * as z from "zod";
import { useRecebimentoContext } from "../../context/contextRecebimento";

const schema = z.object({
  sku: z.string(),
  lote: z.string(),
  idPallet: z.string(),
  quantidade: z.number(),
  peso: z.number(),
});

type Schema = z.infer<typeof schema>;

console.log(tabela);

//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}

export default function FormularioConferencia() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const { dispatch, state, dispatchPage } = useRecebimentoContext();

  const [infoSku, setInfoSku] = useState("");
  const [variavel, setVariavel] = useState(false);

  const onSubmit = (data: Schema) => {
    dispatch({
      type: "ADD_MATERIAL",
      payload: {
        produtos: {
          id: uudiv4(),
          idPallet: data.idPallet,
          descricao: infoSku,
          sku: data.sku,
          lote: data.lote,
          quantidade: data.quantidade,
        },
      },
    });
    setInfoSku("");
    reset();
  };

  async function onChangeProduto(event: any) {
    const produto = await get("produtos");
    if (produto) {
      const ajustado: ITabela[] = JSON.parse(produto);

      const verificar = ajustado.filter(
        (item) =>
          item.sku === parseInt(event.target.value) ||
          item.dum === event.target.value ||
          item.ean === event.target.value
      );

      if (verificar.length > 0) {
        console.log(verificar);
        setInfoSku(verificar[0].desc);
        if (verificar[0].tipo === "PVAR") {
          setVariavel(false);
        } else {
          setVariavel(true);
        }
      } else {
        setInfoSku("");
      }

      console.log(verificar);
    }
  }

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input texto="ID Pallet" {...register("idPallet")} />
      <Input
        texto="SKU"
        {...register("sku", {
          onBlur(event) {
            onChangeProduto(event);
          },
        })}
      />
      {infoSku !== "" && (
        <span className="text-center font-semibold bg-green-300 p-1 rounded">
          {infoSku}
        </span>
      )}
      <div>
        <Input texto="Lote" {...register("lote")} />
      </div>
      <Input
        texto="Quantidade"
        {...register("quantidade", { valueAsNumber: true })}
      />
      <Input
        disabled={variavel}
        texto="Peso"
        {...register("peso", { valueAsNumber: true })}
      />
      <div className="flex justify-end mt-4 p-1">
        <button
        disabled ={infoSku === ""}
          onClick={() =>
            dispatchPage({ type: "SET_PAGE", payload: { page: "anomalia" } })
          }
          className="flex disabled:bg-slate-400  gap-2 justify-between px-2 py-2 m-1 rounded bg-red-300"
        >
          <div>+Anomalia</div>
          <Frown />
        </button>
      </div>

      <Button disabled={variavel} type="submit">
        CADASTRAR
      </Button>
      <Button
        onClick={() => set("produtos", JSON.stringify(tabela))}
        type="button"
      >
        FINALIZAR
      </Button>
    </form>
  );
}
