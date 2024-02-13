"use client";
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
import { useProductEstoqueStore } from "@/pagina/estoque/estados";
import { CalendarPlus, Trash2, Weight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

type IPeso = {
  id: string;
  peso: number;
};

export default function ContagemPvar() {
  const [peso, setPeso] = useState<string>("");
  const [arrPeso, setArrPeso] = useState<IPeso[]>([]);

  const ADD_PRODUTO_PESO = useProductEstoqueStore(
    (state) => state.ADD_PRODUTO_PESO
  );

  async function handleAdd() {
    if (!isNaN(parseFloat(peso))) {
      setArrPeso((state) => [
        ...state,
        { id: uuidv4(), peso: parseFloat(peso) },
      ]);
      setPeso("");
    }
  }

  async function handleRemove(info: string) {
    setArrPeso(arrPeso.filter((item) => item.id !== info));
  }

  function handleAddReduce() {
    if (arrPeso.length > 0) {
      const somaPvar = arrPeso.reduce((acc, index) => {
        return (acc = acc + index.peso);
      }, 0);

      ADD_PRODUTO_PESO(somaPvar / arrPeso.length);
    }
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-2 p-2 mt-2">
            <Weight /><span>Cadastrar Peso</span>
          </div>
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle>PESO VARIAVEL</SheetTitle>
            <SheetDescription>
              <Input
                value={peso}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    setPeso(e.target.value);
                  } else {
                    setPeso("");
                  }
                }}
                texto="peso"
              />
              <Button onClick={handleAdd}>Add</Button>
              <SheetClose asChild>
                <Button onClick={handleAddReduce}>somar</Button>
              </SheetClose>
              <div className="mt-4">
                {arrPeso.map((item, index) => (
                  <div className="px-4 py-6 bg-primary-foreground flex justify-between w-full m-1 items-center rounded">
                    <span>{item.peso}</span>
                    <Trash2 onClick={() => handleRemove(item.id)} />
                  </div>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
