/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConferenciaSchema } from "../../types/infoSku";

export default function FormularioTeste() {
  const form = useForm<z.infer<typeof ConferenciaSchema>>({
    resolver: zodResolver(ConferenciaSchema),
    defaultValues: {
      id: "",
      idPallet: "",
      sku: "",
      lote: "",
      quantidade: 0,
    },
  });

  function submitForm(e:any){
    e.preventDefault()
    console.log(form.getValues())
  }

  
//COMPONENT FORMULARIO
  const DadosVer = ({nome}:{nome:any}) => {
    return (
      <FormField
        control={form.control}
        name={nome}
        render={({ field }) => (
          <FormItem>
            <div className="flex border-2">
              <FormLabel className="text-sm px-2 font-bold uppercase items-center border rounded-l flex bg-slate-400">
                Id Pallet
              </FormLabel>
              <FormControl className="w-full ">
                <Input
                  type="text"
                  className="text-sm font-semibold items-center border rounded-r flex focus:outline-none"
                  placeholder="ID Pallet"
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
);
  }


  return (
    <div className=" w-full">
      <div className="flex flex-col w-full">
        <div className="p-2 flex flex-1">
          <Form {...form}>
            <form onSubmit={(e) => submitForm(e)}  className="w-full">
              <DadosVer nome="idPallet"/>

              <div className="flex justify-between p-2 border rounded"></div>
              <div className="justify-between flex">
                <Button className="mt-2 justify-end" type="submit">
                  FINALIZAR
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

