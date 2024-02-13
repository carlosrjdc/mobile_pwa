"use client";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "@/components/ui/input";
import {
  useDemandaState,
  useProductEstoqueStore,
} from "@/pagina/estoque/estados";
import { IContagem, schemaContagem } from "@/pagina/estoque/type";
import { useUserState } from "@/pagina/stateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  VerificarEndereco,
  atualizarEndereco,
  cadastrarMaterial,
  onChangeProduto,
} from "../function";
import LerQrCodeEndereco from "../lerQrCode";
import LoteProdutoContagemEstoque from "./lote";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import { Checkbox } from "@/components/ui/checkbox";
import { onSubmit } from "./function";

export default function FormularioContagem() {
  //STATE
  const [infoSku, setInfoSku] = useState({ desc: "", empresa: "" });
  const [vazio, setVazio] = useState(false);
  const [idEndereco, setEndereco] = useState<number | null>(null);
  const [idEnderecoAtualizar, setEnderecoAtualizar] = useState<number | null>(null);

  console.log(idEndereco);

  //CONTEXT
  const ADD_PRODUCT = useProductEstoqueStore((state) => state.ADD_PRODUTO);
  const demandaId = useDemandaState((state) => state.idDemanda);

  //ROUTER
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IContagem>({
    resolver: zodResolver(schemaContagem),
  });

  function ajustarEndereco(valor: string) {
    setValue("endereco", valor);
    VerificarEndereco(valor, setEndereco,setEnderecoAtualizar);
  }
  function ajustarSku(valor: string) {
    setValue("sku", valor);
  }
  function ajustarLote(valor: string) {
    setValue("lote", valor);
  }

  return (
    <div>
      <ToastContainer />
      <form
        className="flex flex-col gap-1 w-full p-2"
        onSubmit={handleSubmit(() =>
          onSubmit(
            getValues,
            reset,
            infoSku,
            ADD_PRODUCT,
            demandaId,
            router,
            idEndereco,
            idEnderecoAtualizar

          )
        )}
      >
        <div className=" flex m-0 justify-between items-center">
          <Input
            texto="Endereço"
            {...register("endereco", {
              onBlur(event) {
                VerificarEndereco(event, setEndereco,setEnderecoAtualizar);
              },
              required: true,
            })}
          />
          <LerQrCodeEndereco funcao={ajustarEndereco} />
        </div>
        <ErrorMessage errors={errors} name="endereco" />
        <div className=" flex m-0 justify-between items-center">
          <Input
            texto="SKU"
            {...register("sku", {
              required: true,
              async onBlur(event) {
                const dados = await onChangeProduto(event);
                //@ts-ignore
                setInfoSku(dados);
              },
            })}
          />
          <LerQrCodeEndereco funcao={ajustarSku} />
        </div>
        <span className="text-center uppercase font-semibold text-sm">
          {infoSku.desc}
        </span>
        <ErrorMessage errors={errors} name="sku" />
        <div className="flex justify-center items-center gap-2">
          <Input texto="Lote" {...register("lote", { required: true })} />
          <LoteProdutoContagemEstoque
            valueDisable={infoSku.desc === ""}
            setValue={ajustarLote}
            empresa={
              infoSku.empresa as "dpa" | "lactalis" | "itambe" | undefined
            }
          />
        </div>
        <Input
          texto="Caixas"
          {...register("caixas", {
            valueAsNumber: true,
            required: true,
          })}
        />
        <Input
          className=""
          texto="Unidade"
          {...register("unidade", {
            valueAsNumber: true,
            required: true,
          })}
        />
        <div className="flex items-center mt-4 space-x-2">
          <Checkbox
            className="h-6 w-6"
            onCheckedChange={(e) => setVazio(e as boolean)}
            id="vazio"
          />
          <label htmlFor="vazio" className=" font-bold uppercase">
            vazio ?
          </label>
        </div>
        {vazio ? (
          <Button
            disabled={getValues("endereco") === ""}
            onClick={async () => {
              if (idEndereco) {
                await atualizarEndereco(idEndereco);
                toast.success("Vazio", {
                  position: "top-center",
                });
              }
            }}
            className="mt-4 py-6"
            type="button"
          >
            Cadastrar
          </Button>
        ) : (
          <Button className="mt-4 py-6" type="submit">
            Cadastrar
          </Button>
        )}
      </form>
    </div>
  );
}
