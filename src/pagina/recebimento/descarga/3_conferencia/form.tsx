"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITabela, tabela } from "@/data/produto";
import { zodResolver } from "@hookform/resolvers/zod";
import { get } from "idb-keyval";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { useInfoPageStore } from "../../states/pageState";
import useInfoCarStore, {
  useAnomaliaStore,
  useProductStore,
} from "../../states/recebimentoState";
import LoteProduto from "./lote";

const schema = z.object({
  sku: z.string(),
  lote: z.string().optional(),
  idPallet: z.string(),
  quantidade: z.number(),
  peso: z.number(),
});

type Schema = z.infer<typeof schema>;

console.log(tabela);

//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}

export default function FormularioConferencia() {
  const { dispatchPage } = useRecebimentoContext();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [infoSku, setInfoSku] = useState("");
  const [variavel, setVariavel] = useState(false);
  const [empresa, setEmpresa] = useState<"dpa" | "lactalis" | "itambe">(
    "lactalis"
  );

  const ADD_PRODUCT = useProductStore((state) => state.ADD_PRODUTO);
  const infoProduct = useProductStore((state) => state.produtos);
  const infoCarro = useInfoCarStore((state) => state.infoCarro);
  const infoAnomalia = useAnomaliaStore((state)=> state.anomalia)

  const SET_PAGE = useInfoPageStore((state) => state.SET_PAGE);

  console.log(infoProduct)

  const onSubmit = (data: Schema) => {
    console.log(data);
    ADD_PRODUCT({
      id: uuidv4(),
      idPallet: data.idPallet,
      lote: data.lote ? data.lote : "",
      sku: data.sku,
      quantidade: data.quantidade,
      empresa: empresa,
      descricao: infoSku,
      anomalias:infoAnomalia
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
        setInfoSku(verificar[0].desc);
        setEmpresa(verificar[0].empresa);
        if (verificar[0].tipo === "PVAR") {
          setVariavel(false);
        } else {
          setVariavel(true);
        }
      } else {
        setInfoSku("");
      }
    }
  }

  function ajustarValor(lote:string) {
    console.log("opa")
    setValue("lote", lote);
  }

  console.log(getValues().lote);

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input texto="ID_Pallet" {...register("idPallet")} />
      <Input
        texto="SKU"
        {...register("sku", {
          onBlur(event) {
            onChangeProduto(event);
          },
        })}
      />
      {infoSku !== "" && (
        <div className="text-center font bg-accent text-sm font-semibold uppercase p-1 rounded">
          {infoSku}
        </div>
      )}
      <div className="flex items-center gap-2 mr-2">
        <Input
          texto="Lote"
          placeholder="Lote"
          {...register("lote")}
        />

        <LoteProduto valueDisable={infoSku === ""} setValue={ajustarValor} empresa={empresa} />
      </div>
      <Input
        texto="Quantidade"
        {...register("quantidade", { valueAsNumber: true })}
      />
      <Input texto="Peso" {...register("peso", { valueAsNumber: true })} />
      <div className="flex justify-between mt-4">
        <Button
          onClick={() =>
            dispatchPage({
              type: "SET_PAGE",
              payload: { page: "info_temperatura" },
            })
          }
          type="button"
        >
          VOLTAR
        </Button>
        <Button type="submit">CADASTRAR</Button>
      </div>
    </form>
  );
}
