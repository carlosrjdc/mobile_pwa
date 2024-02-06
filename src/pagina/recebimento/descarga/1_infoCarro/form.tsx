"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRecebimentoContext } from "../../context/contextRecebimento";
import { FormInfoCarro, IInfoCarro } from "../../types/infoCarro";

export default function FormularioInfoCarro({ infoOCR }: { infoOCR?: string }) {
  const { state, dispatchPage } = useRecebimentoContext();

  const form = useForm<IInfoCarro>({
    resolver: zodResolver(FormInfoCarro),
    defaultValues: {
      Ocr: "",
      Doca: "",
      Placa: "",
      Lacre: "",
    },
  });

  console.log(state);

  function onSubmit(data: IInfoCarro) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-2 flex flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="Doca"
              render={({ field }) => (
                <FormItem>
                  <div className="flex border-2">
                    <FormLabel className="text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400">
                      Doca
                    </FormLabel>
                    <FormControl className="w-full ">
                      <Input
                        type="text"
                        className="text-sm font-semibold items-center border rounded-r flex focus:outline-none"
                        placeholder="Doca"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Lacre"
              render={({ field }) => (
                <FormItem>
                  <div className="flex border-2">
                    <FormLabel className="text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400">
                      Lacre
                    </FormLabel>
                    <FormControl className="w-full ">
                      <Input
                        type="number"
                        className="text-sm font-semibold items-center border rounded-r flex focus:outline-none"
                        placeholder="Lacre"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 gap-2 flex items-center">
              <FormLabel> Carreta Fechada</FormLabel>
              <Input type="file" />
            </div>
            <div className="mt-4 gap-2 flex items-center">
              <FormLabel>Lacre</FormLabel>
              <Input type="file" />
            </div>

            <Button
              onClick={() =>
                dispatchPage({
                  type: "SET_PAGE",
                  payload: { page: "info_temperatura" },
                })
              }
              className="mt-2 justify-end"
              type="button"
            >
              FINALIZAR
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
