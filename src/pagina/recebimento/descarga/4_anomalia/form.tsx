/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { AnomaliaSchema, IAnomalia } from "../../types/anomalia";

export default function FormularioAnomalia() {
  const form = useForm<IAnomalia>({
    resolver: zodResolver(AnomaliaSchema),
    defaultValues: {
      causaNConformidade: "",
      localPalletAvaria: "",
      localVeiculoAvaria: "",
      naturezaNConformidade: "",
      origemNConformidade: "",
      tipoNConformidade: "",
    },
  });

  function onSubmit(data: IAnomalia) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const CausaNaoConformidadeArray = [
    { label: "1 - Carga Pisoteada", value: "cargapisoteada", categoria: "Transporte" },
    { label: "2 - Corrente", value: "corrente", categoria: "Transporte" },
    { label: "3 - Lona furada", value: "lonafurada", categoria: "Transporte" },
    { label: "4 - Falta de forro", value: "faltadeforro", categoria: "Transporte" },
    { label: "5 - Lasca de madeira", value: "lascademadeira", categoria: "Transporte" },
    { label: "6 - Assoalho quebrado", value: "assoalhoquebrado", categoria: "Transporte" },
    { label: "7 - Freada brusca (conformidade pelo motorista)", value: "freadabrusca", categoria: "Transporte" },
    { label: "8 - Fueiro", value: "fueiro", categoria: "Transporte" },
    { label: "9 - Prego na carroceria", value: "pregonacarroceria", categoria: "Transporte" },
    { label: "10 - Ganchos", value: "ganchos", categoria: "Transporte" },
    { label: "11 - Materiais sobre produtos", value: "materiaissobreprodutos", categoria: "Transporte" },
    { label: "12 - Pallets tombados", value: "palletstombados", categoria: "Transporte" },
    { label: "13 - Tampas Laterais (Quebrada/Rachada)", value: "tampaslaterais", categoria: "Transporte" },
    { label: "14 - Falha/Quebra no Equip. de Frio", value: "falhaequipamentofrio", categoria: "Transporte" },
    { label: "15 - Corda", value: "corda", categoria: "Transporte" },
    { label: "16 - Condições da estrada", value: "condicoesestrada", categoria: "Transporte" },
    { label: "17 - Presença de Pragas / Roedores", value: "presencapragas", categoria: "Transporte" },
    { label: "18 - Molhado pelo sistema do frio", value: "molhadofriosistema", categoria: "Transporte" },
    { label: "19 - Falta de Higiene", value: "faltahigiene", categoria: "Transporte" },
    { label: "20 - Parede, teto e vedação fora do padrão", value: "paredetetovedacao", categoria: "Transporte" },
    { label: "21 - Umidade", value: "umidade", categoria: "Transporte" },
    { label: "22 - Manuseio inadequado", value: "manuseioinadequado", categoria: "Transporte" },
    { label: "23 - Lacre rompido", value: "lacrerompido", categoria: "Transporte" },
    { label: "24 - Carga corrida", value: "cargacorrida", categoria: "Transporte" },
    { label: "25 - Presença de produto químico", value: "presencaprodutoquimico", categoria: "Transporte" },
    { label: "26 - Falta/ausência de produtos", value: "faltaausenciaprodutos", categoria: "Transporte" },
    { label: "27 - Outros (especificar no Parecer Logística)", value: "outros", categoria: "Transporte" },
    { label: "28 - Carregamento Errado", value: "carregamentoerrado", categoria: "OperadorLogistico" },
    { label: "29 - Batida de Empilhadeira", value: "batidaempilhadeira", categoria: "OperadorLogistico" },
    { label: "30 - Ataque de Pragas/Roedores", value: "ataquepragasroedores", categoria: "OperadorLogistico" },
    { label: "31 - Sobra de Produto (informar na Planilha de Falta e Sobra)", value: "sobraproduto", categoria: "OperadorLogistico" },
    { label: "32 - Falta de Produto (informar na Planilha de Falta e Sobra)", value: "faltaproduto", categoria: "OperadorLogistico" },
    { label: "33 - Mau Paletizado / Palete Misto", value: "maupaletizado", categoria: "OperadorLogistico" },
    { label: "34 - Sem Cantoneira", value: "semcantoneira", categoria: "OperadorLogistico" },
    { label: "35 - Stretch Apertado", value: "stretchapertado", categoria: "OperadorLogistico" },
    { label: "36 - Stretch Frouxo/Pouco Stretch", value: "stretchfrouxo", categoria: "OperadorLogistico" },
    { label: "37 - Ausência de Filme na Base", value: "ausenciafilmefbase", categoria: "OperadorLogistico" },
    { label: "38 - Nº Maior de Lastros", value: "maiorlastros", categoria: "OperadorLogistico" },
    { label: "39 - Avaria de Carregamento", value: "avariacarregamento", categoria: "OperadorLogistico" },
    { label: "40 - Carga estivada", value: "cargaestivada", categoria: "OperadorLogistico" },
    { label: "41 - Tombado no Drive-In", value: "tombadodrivein", categoria: "OperadorLogistico" },
    { label: "42 - Desvio Temperatura de Conservação", value: "desviotemperatura", categoria: "OperadorLogistico" },
    { label: "43 - Contaminação Cruzada", value: "contaminacaocruzada", categoria: "OperadorLogistico" },
    { label: "44 - Avaria de Movimentação", value: "avariamovimentacao", categoria: "OperadorLogistico" },
    { label: "45 - Consumo Interno", value: "consumointerno", categoria: "OperadorLogistico" },
    { label: "46 - Goteira no Depósito", value: "goteiradeposito", categoria: "OperadorLogistico" },
    { label: "47 - Manuseio Inadequado", value: "manuseioinadequado", categoria: "OperadorLogistico" },
    { label: "48 - Outros (especificar no Parecer Logística)", value: "outros", categoria: "OperadorLogistico" },
    { label: "49 - Estrado de madeira fora do padrão", value: "estradoforapadrao", categoria: "OperadorLogistico" },
    { label: "50 - Mau Paletizado/Palete Misto", value: "maupaletizado", categoria: "UnidadeProdutora" },
    { label: "51 - Sem Cantoneira", value: "semcantoneira", categoria: "UnidadeProdutora" },
    { label: "52 - Stretch Apertado", value: "stretchapertado", categoria: "UnidadeProdutora" },
    { label: "53 - Stretch Frouxo/Pouco Stretch", value: "stretchfrouxo", categoria: "UnidadeProdutora" },
    { label: "54 - Ausência de Filme na Base", value: "ausenciafilmefbase", categoria: "UnidadeProdutora" },
    { label: "55 - Nº Maior de Lastros", value: "maiorlastros", categoria: "UnidadeProdutora" },
    { label: "56 - Divergência Embalagem Secundária", value: "divergenciaembalagem", categoria: "UnidadeProdutora" },
    { label: "57 - Datação Divergente", value: "datacaodivergente", categoria: "UnidadeProdutora" },
    { label: "58 - Má Formação da Embalagem", value: "maformacaoembalagem", categoria: "UnidadeProdutora" },
    { label: "59 - Avariado pela Esteira (embalagem primária)", value: "avariadoesteira", categoria: "UnidadeProdutora" },
    { label: "60 - Corte Vertical na embalagem primária", value: "cortevertical", categoria: "UnidadeProdutora" },
    { label: "61 - Defeito na Selagem Longitudinal / Transversal", value: "defeitoselagem", categoria: "UnidadeProdutora" },
    { label: "62 - Excesso de Temperatura na Selagem das Abas", value: "excessotemperatura", categoria: "UnidadeProdutora" },
    { label: "63 - Aba Dobrada", value: "abadobrada", categoria: "UnidadeProdutora" },
    { label: "64 - Resíduo de Material de Embalagem", value: "residuomaterial", categoria: "UnidadeProdutora" },
    { label: "65 - Desvio de Produção", value: "desvioproducao", categoria: "UnidadeProdutora" },
    { label: "66 - Resistência da embalagem", value: "resistenciaembalagem", categoria: "UnidadeProdutora" },
    { label: "67 - Molhado de produto (vazamento)", value: "molhadoproduto", categoria: "UnidadeProdutora" },
    { label: "68 - Data apagada/borrada", value: "dataapagada", categoria: "UnidadeProdutora" },
    { label: "69 - Embalagem sem data de fabricação", value: "semdatafabricacao", categoria: "UnidadeProdutora" },
    { label: "70 - Embalagem sem código de barras", value: "semcodigobarras", categoria: "UnidadeProdutora" },
    { label: "71 - Aba aberta (embalagem primária)", value: "abaabertaembalagemprimaria", categoria: "UnidadeProdutora" },
    { label: "72 - Aba aberta (embalagem secundária)", value: "abaabertaembalagemsecundaria", categoria: "UnidadeProdutora" },
    { label: "73 - Defeito na selagem da embalagem", value: "defeitoselagemembalagem", categoria: "UnidadeProdutora" },
    { label: "74 - Falha no DINC", value: "falhadinc", categoria: "UnidadeProdutora" },
    { label: "75 - Falha na Fita", value: "falhafita", categoria: "UnidadeProdutora" },
    { label: "76 - Troca de Fita", value: "trocafita", categoria: "UnidadeProdutora" },
    { label: "77 - Troca de bobina", value: "trocabobina", categoria: "UnidadeProdutora" },
    { label: "78 - Má formação da tampa", value: "maformacaotampa", categoria: "UnidadeProdutora" },
    { label: "79 - Danificado na cardboard", value: "danificadocardboard", categoria: "UnidadeProdutora" },
    { label: "80 - Dobradora final", value: "dobradorafinal", categoria: "UnidadeProdutora" },
    { label: "81 - Microfuro", value: "microfuro", categoria: "UnidadeProdutora" },
    { label: "82 - Emenda do filme", value: "emendadofilme", categoria: "UnidadeProdutora" },
    { label: "83 - Riscos na embalagem", value: "riscosembalagem", categoria: "UnidadeProdutora" },
    { label: "84 - Reinicio/Parada de máquina", value: "reinicioparada", categoria: "UnidadeProdutora" },
    { label: "85 - Zona de Risco", value: "zonaderisco", categoria: "UnidadeProdutora" },
    { label: "86 - Queda do robo", value: "quedarobo", categoria: "UnidadeProdutora" },
    { label: "87 - Triagem do robo", value: "triagemrobo", categoria: "UnidadeProdutora" },
    { label: "88 - Falta de unidade em caixa/fardo lacrado", value: "faltaunidadecaixa", categoria: "UnidadeProdutora" },
    { label: "89 - Falha na tampa", value: "falhatampa", categoria: "UnidadeProdutora" },
    { label: "90 - Embalagem sem tampa", value: "semtampa", categoria: "UnidadeProdutora" },
    { label: "91 - Avariado pela Esteira que transporta o pallet", value: "avariadoesteirapallet", categoria: "UnidadeProdutora" },
    { label: "92 - Outros (especificar)", value: "outros", categoria: "UnidadeProdutora" },
    { label: "93 - Danificado no depósito do cliente", value: "danificadodepositocliente", categoria: "Comercial" },
    { label: "94 - Vencido no depósito do cliente", value: "vencidodepositocliente", categoria: "Comercial" },
    { label: "95 - Vencido no depósito Lactalis", value: "vencidodepositolactalis", categoria: "Comercial" },
    { label: "96 - Temperatura Inadequada no cliente", value: "temperaturainadequadacliente", categoria: "Comercial" },
    { label: "97 - Ataque de pragas / Roedores no cliente", value: "ataquepragasroedorescliente", categoria: "Comercial" },
  ] as const;

  const filtroNaoConforme = CausaNaoConformidadeArray.filter(item => item.categoria === form.getValues().causaNConformidade)

  const causaFinalArray = [
    { label: "Transporte", value: "Transporte" },
    { label: "Logistica / Operador", value: "OperadorLogistico" },
    { label: "Unidade Produtora", value: "UnidadeProdutora" },
    { label: "Comercial", value: "Comercial" },
  ] as const;

  const tipoNConformidadeArray = [
    { label: "1-Amassado", value: "amassado" },
    { label: "2-Furado", value: "furado" },
    { label: "3-Estufado", value: "estufado" },
    { label: "4-Rasgado", value: "rasgado" },
    { label: "5-Sujo", value: "sujo" },
    { label: "6-Mofado", value: "mofado" },
    { label: "7-Molhado de Chuva", value: "molhadoChuva" },
    { label: "8-Má Apresentação", value: "maApresentacao" },
    { label: "9-Fora de Temperatura", value: "foraTemperatura" },
    { label: "10-Data Divergente", value: "dataDivergente" },
    { label: "11-Coalhado", value: "coalhado" },
    { label: "12-Vazia", value: "vazia" },
    { label: "13-Vencido", value: "vencido" },
    { label: "14-Vazando", value: "vazando" },
    { label: "15-Cont. Quebrado", value: "contQuebrado" },
    { label: "16-Quebrado", value: "quebrado" },
    { label: "17-Selo Descolando", value: "seloDescolando" },
    { label: "18-Falta de Unidade", value: "faltaUnidade" },
    { label: "19-Falta de Caixa", value: "faltaCaixa" },
    { label: "20-Outros", value: "outros" },
  ] as const;

  const originNaoConformidadeArray = [
    { label: "1-Transferência", value: "transferencia" },
    { label: "2-Reentrega", value: "reentrega" },
    { label: "3- Interna (Armazém)", value: "internaArmazem" },
    { label: "4-Devolução", value: "devolucao" },
    { label: "5-Retorno Empreiteiro / RCA", value: "empreiteiroRca" },
  ] as const;

  return (
    <div className=" w-full">
      <div className="flex flex-col w-full">
        <div className="p-2 flex flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="origemNConformidade"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Origem Não conformidade</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? originNaoConformidadeArray.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Selecione a Origem da N Conformidade"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search N Conformidade..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {originNaoConformidadeArray.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue(
                                    "origemNConformidade",
                                    language.value
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tipoNConformidade"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Tipo de N Conformidade</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? tipoNConformidadeArray.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Selecione a N Conformidade"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search N Conformidade..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {tipoNConformidadeArray.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue(
                                    "tipoNConformidade",
                                    language.value
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="causaNConformidade"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Seleciona a Caausa Conformidade</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? causaFinalArray.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Selecione a N Conformidade"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search N Conformidade..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {causaFinalArray.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue(
                                    "causaNConformidade",
                                    language.value
                                  );
                                }}
                              >
                                <Check
                                  onClick={() =>
                                    console.log(
                                      form.getValues().causaNConformidade
                                    )
                                  }
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
                            <FormField
                control={form.control}
                name="causaNConformidade"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Seleciona a Caausa Conformidade</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? filtroNaoConforme.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Selecione a N Conformidade"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search N Conformidade..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {filtroNaoConforme.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue(
                                    "causaNConformidade",
                                    language.value
                                  );
                                }}
                              >
                                <Check
                                  onClick={() =>
                                    console.log(
                                      form.getValues().causaNConformidade
                                    )
                                  }
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between p-2 border rounded"></div>
              <div className="justify-between flex">
                <Button className="mt-2 justify-end" type="submit">
                  FINALIZAR
                </Button>
                <Button className="mt-2 justify-end" type="button">
                  CADASTRAR
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
