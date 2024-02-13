import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  sif: z.string(),
  dataRef: z.string(),
  identificador: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

export default function LoteProdutoContagemEstoque({
  valueDisable,
  setValue,
  empresa = "lactalis",
}: {
  valueDisable:boolean,
  setValue: (id: string) => void;
  empresa?: "dpa" | "lactalis" | "itambe";
}) {
  const { register, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
  });


  const onSubmit = (data: Schema) => {
    switch (empresa) {
      case "dpa":
        const partesData = data.dataRef.split("-")  
        const dataAtualizada = new Date(parseInt(partesData[0]),parseInt(partesData[1]) - 1, parseInt(partesData[2]))
        const primeiroDiaDoAno = new Date(dataAtualizada.getFullYear(),0,1)
        const umDiaEmMilissegundos = 1000 * 60 * 60 *24
        const difEmMilSeg = dataAtualizada.getTime() - primeiroDiaDoAno.getTime()
        const diaNoAno = Math.ceil(difEmMilSeg / umDiaEmMilissegundos) + 1
        const mesFormatado = diaNoAno.toString().padStart(3, "0");
        setValue(`${data.dataRef[3]}${mesFormatado}${data.sif}${data.identificador ? data.identificador : ""}`);
        reset()
        return {};
      case "itambe":
        console.log("teste");
        return {};
      case "lactalis":
        const datasemhifen = data.dataRef.replace(/-/g, "");
        setValue(`${data.sif}${datasemhifen.substring(2)}`);
        reset()
        /*const mes = refMes.getMonth() ;
        const mesFormatado = mes.toString().padStart(2, "0");
        const ano = refAno.getFullYear();
        const anoFormatado = (ano % 100).toString().padStart(2, "0");
        const dia = refDia.setDate(data.dataRef.getDate() + 1)
        const formatar = new Date(dia).getDate()
        const diaFormatado = formatar.toString().padStart(2, "0");
        setValue(`${data.sif}ano${anoFormatado}mes${mes}dia${diaFormatado}`);*/

        break;
      default:
        return empresa;
    }
  };

  return (
    <Sheet>
      <SheetTrigger disabled={valueDisable}>
        <CalendarPlus />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Lote</SheetTitle>
          <SheetDescription>
            <form
              className="flex flex-col gap-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input texto="SIF" {...register("sif")} />
              <Input texto="Fabricação" {...register("dataRef")} type="date" />
              {empresa === "dpa" && (
                <Input texto="Verificador" {...register("identificador")} />
              )}
              <div className="flex gap-4 justify-center m-2">
                <Button type="button">Limpar</Button>
                <SheetClose>
                  <Button type="submit">Cadastrar</Button>
                </SheetClose>
              </div>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
