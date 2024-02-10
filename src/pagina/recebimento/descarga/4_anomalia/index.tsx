"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { useAnomaliaStore, useProductStore } from "../../states/recebimentoState";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import AjudaDrawer from "./ajuda";
import {
  CausaNaoConformidadeArray,
  causaFinalArray,
  originNaoConformidadeArray,
  tipoNConformidadeArray,
} from "./data";

export default function Anomalia() {
  const [dados, setDados] = React.useState({
    origemNaoConformidade: "",
    causaFinal: "",
    causa: "",
    tipo: "",
    localAvaria: "",
    localDoPallet: "",
  });

  const filtrado = CausaNaoConformidadeArray.filter(
    (item) => item.categoria === dados.causaFinal
  );

  const ADD_ANOMLIA = useAnomaliaStore((state)=> state.ADD_ANOMALIA)

 const infoProduct = useProductStore((state)=> state.produtos)

  const tamanhoEmBytes = new TextEncoder().encode(
    JSON.stringify(CausaNaoConformidadeArray)
  ).length;

  const[qtd, setQtd]= React.useState<number | null>(null)
  const { dispatchPage } = useRecebimentoContext();

  function AddNovaAnomalia(){
    ADD_ANOMLIA({
      causaNConformidade:dados.causa,
      localAvariaPallet: dados.localDoPallet,
      localAvariaVeiculo: dados.localAvaria,
      origemNConformidade: dados.origemNaoConformidade,
      setorNConformidade: dados.causaFinal,
      tipoNConformidade: dados.tipo,
      quantidade:qtd ? qtd : 0
    })
    dispatchPage({type:"SET_PAGE", payload:{page:"conferencia"}})
  }

  return (
    <div className="p-2 flex flex-col gap-2">
      <InfoPlacaOcr />
      <Input onChange={(e)=>setQtd(e.target.value !== "" ? parseInt(e.target.value) : null)} type="number" texto="Quantidade" />
     { qtd && <div className="flex items-center gap-2">
        <Label>Veiculo</Label>
        <Select
          value={dados.localAvaria}
          onValueChange={(e) => setDados({ ...dados, localAvaria: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Local avaria no Veiculo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel> {dados.localAvaria}</SelectLabel>
              {[
                { label: "Frente/Cavalo", value: "frenteCavalos" },
                { label: "Meio", value: "meio" },
                { label: "Fundo/Porta", value: "fundoPorta" },
                { label: "Todos", value: "Todos" },
              ].map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}
      {dados.localAvaria !== "" && <div className="flex items-center gap-2">
        <Label>Pallet</Label>
        <Select
          value={dados.localDoPallet}
          onValueChange={(e) => setDados({ ...dados, localDoPallet: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Local Avaria no Pallet" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel> {dados.localDoPallet}</SelectLabel>
              {[
                { label: "Superior", value: "superior" },
                { label: "Lateral", value: "lateral" },
                { label: "Meio/Centro", value: "meioCentro" },
                { label: "Inferior", value: "inferior" },
                { label: "Todos", value: "todos" },
              ].map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}
      {dados.localDoPallet !== "" &&  <div className="flex items-center gap-2">
        <Label>Tipo</Label>
        <Select
          value={dados.tipo}
          onValueChange={(e) => setDados({ ...dados, tipo: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo da Não Conformidade" />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {dados.causaFinal}</SelectLabel>
              {tipoNConformidadeArray.map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}

      { dados.tipo !== "" &&  <div className="flex items-center gap-2">
        <Label>Origem</Label>
        <Select
          value={dados.origemNaoConformidade}
          onValueChange={(e) => setDados({ ...dados, origemNaoConformidade: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a origem da Nao Conformidade " />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {dados.origemNaoConformidade}</SelectLabel>
              {originNaoConformidadeArray.map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}

      {dados.origemNaoConformidade !== "" &&  <div className="flex items-center gap-2">
        <Label>Setor</Label>
        <Select
          value={dados.causaFinal}
          onValueChange={(e) => setDados({ ...dados, causaFinal: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o Setor da Nao conformidade " />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {dados.causaFinal}</SelectLabel>
              {causaFinalArray.map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}

      {dados.causaFinal !== "" &&  <div className="flex items-center gap-2">
        <Label>Não Conformidade</Label>
        <Select
          value={dados.causa}
          onValueChange={(e) => setDados({ ...dados, causa: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecionar a Não conformidade" />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {dados.causa}</SelectLabel>
              {filtrado.map((item, index) => (
                <div key={index} onClick={() => alert("div")}>
                  <SelectItem
                    onChange={() => alert("teste")}
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>}
      {dados.causa !== "" &&  <div className="p-2 border mt-8 rounded">
        <div className="flex justify-between bg-blue-400 p-2 rounded">
          <span className="font-bold">CADASTRE AS FOTOS</span>
          <AjudaDrawer/>
        </div>
        <div className="mt-4 gap-2 flex items-center">
          <Label className="w-28"> FOTO 1</Label>
          <Input type="file" />
        </div>
        <div className="mt-4 gap-2 flex items-center">
          <Label className="w-28">FOTO 2</Label>
          <Input type="file" />
        </div>
        <div className="mt-4 gap-2 flex items-center">
          <Label className="w-28">FOTO 3</Label>
          <Input type="file" />
        </div>
        <div className="mt-4 gap-2 flex items-center">
          <Label className="w-28">FOTO 4</Label>
          <Input type="file" />
        </div>
      </div>}
      <div className="flex justify-between mt-4">
        <Button onClick={()=> AddNovaAnomalia()} type="button">VOLTAR</Button>
        <Button onClick={()=> AddNovaAnomalia()} type="button">CADASTRAR</Button>
      </div>
    </div>
  );
}
