"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LerQrCodeEndereco from "@/pagina/estoque/contagem/2_ContagemEstoque/lerQrCode";
import {
  useDemandaState,
  useProductEstoqueStore,
} from "@/pagina/estoque/estados";
import { IContagem, schemaContagem } from "@/pagina/estoque/type";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { buscarInfoBandoIndexed } from "../functions/auxiliar";
import { v4 as uudidv4 } from "uuid";
import LoteProdutoContagemEstoque from "./lote";
import ContagemPvar from "./pvar";
import DrawerInferior from "@/components/ui/drawerInferior";
import BuscaProdutorQRCode from "./qrCode/qrCodeProduto";
import { useState } from "react";
import BuscaEndeecorQRCode from "./qrCode/qrCodeEndereco";
import { useQrCodeState } from "./state";

export default function FormularioContagemPage() {

  const [ open ,setOpen] = useState(false)
  const [ openEndereco ,setOpenEndereco] = useState(false)
  const UPDATE_QR_ENDERECO = useQrCodeState((state)=> state.UPDATE_QR_ENDERECO)
  const infoQrCodeEndereco = useQrCodeState((state)=> state.qrCodEndereco)
  const UPDATE_QR_SKU = useQrCodeState((state)=> state.UPDATE_QR_SKU)
  const infoQrCodeSKU = useQrCodeState((state)=> state.qrCodeSku)

  //USE FORM
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IContagem>({
    resolver: zodResolver(schemaContagem),
  });

  //CONTEXT
  const ADD_PRODUCT = useProductEstoqueStore(
    (state) => state.ADD_PRODUTO_SINGLE
  );
  const ADD_PRODUCT_ARRAY = useProductEstoqueStore(
    (state) => state.ADD_PRODUTO
  );

  const info = useProductEstoqueStore((state) => state.produto);

  async function onHandle(data: IContagem) {
    console.log(data);
    const uid = uudidv4();
    await ADD_PRODUCT({
      ...data,
      id: uid,
    });
    ADD_PRODUCT_ARRAY({
      ...info,
    });
    reset();
  }

  function ajustarLote(valor: string) {
    setValue("sku", valor);
  }

  function ajustarendereco(valor: string) {
    setValue("endereco", valor);
  }

  /*
  
  id String @id
  idDemanda Int
  idSku String
  idEndereco Int
  lote String
  caixas Int ?
  unidade Int ?
  */

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onHandle)}
        className="flex flex-col gap-1 w-full p-2"
      >
        <CampoInput
          label="Endereço"
          name="endereco"
          register={register}
          required={false}
          qrCode={true}
          errors={errors}
        />
        <CampoInput
          label="Sku"
          name="sku"
          register={register}
          required={false}
          qrCode={true}
          errors={errors}
          setValue={setValue}
        />
        <DrawerInferior open={infoQrCodeEndereco} setOpen={UPDATE_QR_ENDERECO}>
          <div className="bg-red-400 p-2 rounded">ENDERECO</div>
        <BuscaEndeecorQRCode ajustarLote={ajustarendereco} open={infoQrCodeEndereco} setOpen={UPDATE_QR_ENDERECO}/>
        </DrawerInferior>

        <DrawerInferior open={infoQrCodeSKU} setOpen={UPDATE_QR_SKU}>
        <div className="bg-blue-400 p-2 rounded">SKU</div>
          <BuscaProdutorQRCode ajustarLote={ajustarLote} open={infoQrCodeSKU} setOpen={UPDATE_QR_SKU}/>
        </DrawerInferior>
        <CampoInput
          label="Descrição"
          name="desc"
          register={register}
          required={false}
          errors={errors}
          setValue={setValue}
          disabled={true}
        />
        <div className="flex justify-between w-5/6 items-center gap-2">
          <CampoInput
            label="Lote"
            name="lote"
            register={register}
            required={false}
          />
          <LoteProdutoContagemEstoque
            valueDisable={false}
            setValue={ajustarLote}
            empresa={info.empresa as "dpa" | "lactalis" | "itambe" | undefined}
          />
        </div>
        <CampoInput
          label="Caixa"
          name="caixas"
          register={register}
          required={false}
          numerico={true}
        />
        <CampoInput
          label="Unidade"
          name="unidade"
          register={register}
          required={false}
          numerico={true}
        />

        {info.tipo === "PVAR" && (
          <div className="flex justify-between items-center rounded p-2 m-1 bg-primary-foreground">
            <ContagemPvar />
            peso medio: {info.peso}
          </div>
        )}

        <Button className="mt-4 py-6" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

// COMPONENTE AUXILIAR
interface CampoInputProps {
  label: string;
  name: keyof IContagem;
  register: UseFormRegister<IContagem>;
  disabled?: boolean;
  onBlur?: (e: any) => void;
  required?: boolean;
  errors?: FieldErrors<IContagem>;
  qrCode?: boolean;
  numerico?: boolean;
  setValue?: UseFormSetValue<IContagem>;
}

const CampoInput: React.FC<CampoInputProps> = ({
  label,
  name,
  register,
  onBlur,
  required,
  errors,
  qrCode,
  numerico = false,
  setValue,
  disabled,
}) => {
  const ADD_PRODUCT_DESC = useProductEstoqueStore(
    (state) => state.ADD_DESC_EMPRESA
  );

  const ADD_ID_ENDERECO = useProductEstoqueStore(
    (state) => state.ADD_ID_ENDERECO
  );

  async function onChangeItem(e: string) {
    if (name === "sku") {
      const info = await buscarInfoBandoIndexed(parseInt(e), "sku", "produtos");
      if (info) {
        console.log({ passei: e });
        if (setValue) {
          setValue("desc", info.sku);
          ADD_PRODUCT_DESC({
            desc: info.sku as string,
            sku: e,
            empresa: info.empresa as string,
            tipo: info.tipo as "PVAR" | "PPAR",
          });
        }
      }
    }
    if (name === "endereco") {
      const info = await buscarInfoBandoIndexed(e, "endereco", "endereco");
      if (info) {
        ADD_ID_ENDERECO({
          endereco: info.endereco,
          idEndereco: info.idEndereco,
        });
      }
    }
  }

  function ajustarSku(valor: string) {
    if(setValue){
      setValue("sku", valor);
    }

  }

  return (
    <div>
      <div className="flex m-0 justify-between items-center">
        <Input
          disabled={disabled}
          texto={label}
          {...register(name, { required, valueAsNumber: numerico })}
          onBlur={(e) => onChangeItem(e.target.value)}
        />

        {qrCode && <LerQrCodeEndereco funcao={ajustarSku} />}
      </div>
      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p>{message}</p>}
        />
      )}
    </div>
  );
};
