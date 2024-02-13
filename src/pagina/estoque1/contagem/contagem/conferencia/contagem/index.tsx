"use client";

import MenuSuperior from "@/components/global/menuSuperior";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITabela } from "@/data/produto";
import { contagemOffline } from "@/offline";
import { useProductEstoqueStore } from "@/pagina/recebimento/states/estoqueState";
import { zodResolver } from "@hookform/resolvers/zod";
import { get } from "idb-keyval";
import isOnline from "is-online";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";
import LerEtiquetaEndereco from "./lerEndereco";
import LoteProdutoContagem from "./lote";

//TIPAGEM
const schema = z.object({
  produto: z.string(),
  lote: z.string(),
  caixas: z.number(),
  unidade: z.number(),
  endereco: z.string(),
});

type Schema = z.infer<typeof schema>;

export default function ContagemEnderecos() {
  const [infoSku, setInfoSku] = useState("");
  const [variavel, setVariavel] = useState(false);
  const [empresa, setEmpresa] = useState<"dpa" | "lactalis" | "itambe">(
    "lactalis"
  );
  //HOOK FORM
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  //HOOK CONTEXT
  const ADD_PRODUCT = useProductEstoqueStore((state) => state.ADD_PRODUTO);
  const infoProduto = useProductEstoqueStore((state) => state.produtos);

  console.log(infoProduto)


  //ONSUBMIT
  const onSubmit = (data: Schema) => {
    ADD_PRODUCT({
      id: uuidv4(),
      lote: data.lote,
      quantidade: data.caixas,
      sku: data.produto,
      unidade: data.unidade,
      endereco: data.endereco,
      fabricacao: "",
      sif: 0,
      descricao: infoSku,
    });
    console.log(data);
  };

  async function setarProduto() {
    contagemOffline("atualizar", {
      caixas: getValues().caixas,
      demandaId: 1,
      descricao: infoSku,
      posicao: "A 001 0001 10",
      unidade: getValues().unidade,
      sku: getValues().produto,
      id: uuidv4(),
    });
  }

  /*        item.id === by.id
          ? { ...item, lote: by.lote, quantidade: by.quantidade, peso:by.peso, unidade:by.unidade }
          : item
          */

  //LerQRCode

  async function onChangeProduto(event: any) {
    console.log(await isOnline());
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

  function ajustarValor(endereco: string) {
    setValue("endereco", endereco);
  }
  function ajustarValorLote(lote: string) {
    setValue("lote", lote);
  }

  async function ajustarValorSku(sku: string) {
    setValue("produto", sku);
  }

  return (
    <div>
      <MenuSuperior />
      <form
        className="flex flex-col gap-4 w-full p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center gap-2">
          <Input
            texto="Endereço"
            {...register("endereco", {
              onBlur(event) {
                onChangeProduto(event);
              },
            })}
          />
          <LerEtiquetaEndereco funcao={ajustarValor} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Input
            texto="SKU"
            {...register("produto", {
              onBlur(event) {
                onChangeProduto(event);
              },
            })}
          />
          <LerEtiquetaEndereco funcao={ajustarValorSku} />
        </div>
        {infoSku && <strong>{infoSku}</strong>}
        <div className="flex justify-between items-center gap-2">
          <Input texto="Lote" {...register("lote")} />
          <LoteProdutoContagem
            valueDisable={infoSku === ""}
            empresa={empresa}
            setValue={ajustarValorLote}
          />
        </div>
        <Input
          texto="Caixas"
          {...register("caixas", {
            valueAsNumber: true,
          })}
        />
        <Input
          texto="Unidades"
          {...register("unidade", {
            valueAsNumber: true,
          })}
        />

        <div className="flex justify-between mt-4">
          <Button onClick={() => setarProduto()} type="button">
            VOLTAR
          </Button>
          <Button className="" type="submit">
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  );
}
