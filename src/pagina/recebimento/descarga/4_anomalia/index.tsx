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
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import AjudaDrawer from "./ajuda";
import {
  CausaNaoConformidadeArray,
  causaFinalArray,
  originNaoConformidadeArray,
  tipoNConformidadeArray,
} from "./data";

export default function Anomalia() {
  const [open, setOpen] = React.useState({
    origemNaoConformidade: "",
    causaFinal: "",
    causa: "",
    tipo: "",
    localAvaria: "",
    localDoPallet: "",
  });

  const filtrado = CausaNaoConformidadeArray.filter(
    (item) => item.categoria === open.causaFinal
  );

  const tamanhoEmBytes = new TextEncoder().encode(
    JSON.stringify(CausaNaoConformidadeArray)
  ).length;

  const[qtd, setQtd]= React.useState<number | null>(null)

  console.log(tamanhoEmBytes);

  return (
    <div className="p-2 flex flex-col gap-2">
      <InfoPlacaOcr />
      <Input onChange={(e)=>setQtd(e.target.value !== "" ? parseInt(e.target.value) : null)} type="number" texto="Quantidade" />
     { qtd && <div className="flex items-center gap-2">
        <Label>Veiculo</Label>
        <Select
          value={open.localAvaria}
          onValueChange={(e) => setOpen({ ...open, localAvaria: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Local avaria no Veiculo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel> {open.localAvaria}</SelectLabel>
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
      {open.localAvaria !== "" && <div className="flex items-center gap-2">
        <Label>Pallet</Label>
        <Select
          value={open.localDoPallet}
          onValueChange={(e) => setOpen({ ...open, localDoPallet: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Local Avaria no Pallet" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel> {open.localDoPallet}</SelectLabel>
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
      {open.localDoPallet !== "" &&  <div className="flex items-center gap-2">
        <Label>Tipo</Label>
        <Select
          value={open.tipo}
          onValueChange={(e) => setOpen({ ...open, tipo: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo da Não Conformidade" />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {open.causaFinal}</SelectLabel>
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

      { open.tipo !== "" &&  <div className="flex items-center gap-2">
        <Label>Origem</Label>
        <Select
          value={open.origemNaoConformidade}
          onValueChange={(e) => setOpen({ ...open, origemNaoConformidade: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a origem da Nao Conformidade " />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {open.origemNaoConformidade}</SelectLabel>
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

      {open.origemNaoConformidade !== "" &&  <div className="flex items-center gap-2">
        <Label>Setor</Label>
        <Select
          value={open.causaFinal}
          onValueChange={(e) => setOpen({ ...open, causaFinal: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o Setor da Nao conformidade " />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {open.causaFinal}</SelectLabel>
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

      {open.causaFinal !== "" &&  <div className="flex items-center gap-2">
        <Label>Não Conformidade</Label>
        <Select
          value={open.causa}
          onValueChange={(e) => setOpen({ ...open, causa: e })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecionar a Não conformidade" />
          </SelectTrigger>
          <SelectContent onChange={(e) => alert("oie")}>
            <SelectGroup onChange={(e) => alert("foi")}>
              <SelectLabel> {open.causa}</SelectLabel>
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
      {open.causa !== "" &&  <div className="p-2 border mt-8 rounded">
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
      <Button>CADASTRAR ANOMALIA</Button>
    </div>
  );
}
