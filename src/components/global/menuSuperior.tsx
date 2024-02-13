/** @format */
"use client";
import { Check, ChevronsUpDown, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useUserState } from "@/pagina/stateUser";

export default function MenuSuperior() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const infoUser = useUserState((state)=> state.user)

  console.log(infoUser)

  const unidades = [
    {
      value: "riodejaneiro",
      label: "Rio de Janeiro",
    },
    {
      value: "saopaulo",
      label: "São Paulo",
    },
    {
      value: "recife",
      label: "Recife",
    },
    {
      value: "outr",
      label: "outr",
    },
  ];

  useEffect(() => {

    const handleKeyPress = (event: any) => {
      // Verifica se a tecla pressionada é a tecla "Esc"
      if (event.key === "Escape") {
        router.back();
      }
    };

    // Adiciona o ouvinte de eventos quando o componente é montado
    window.addEventListener("keydown", handleKeyPress);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]); // Adicione `router` à lista de dependências para garantir que o useEffect seja recriado quando `router` for alterado

  return (
    <div className="bg-primary flex justify-between px-2 py-2 items-center">
      <Undo2
        className="text-secondary"
        onClick={() => router.back()}
        size={40}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? unidades.find((unidade) => unidade.value === value)?.label
              : "Selecione a unidade..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Procurar unidade..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {unidades.map((unidade) => (
                <CommandItem
                  key={unidade.value}
                  value={unidade.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === unidade.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {unidade.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
