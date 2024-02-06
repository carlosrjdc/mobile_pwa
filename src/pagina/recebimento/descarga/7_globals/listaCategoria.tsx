"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

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

type Iinfo = {
    value:string,
    label:string
}

export default function ListaComboBox({open,setOpen,value,setValue,info}:{open:boolean, setOpen:React.Dispatch<boolean>, value:string, setValue:React.Dispatch<string>,info:Iinfo[]}) {

  return (
    <div>
      <div className="">
        <Popover  open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {value
                ? info.find((item) => item.value === value)
                    ?.label
                : "Select item..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-screen p-2 bg-blue-400">
            <Command className="w-full ">
              <CommandInput placeholder="Search item..." />
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {info.map((item) => (
                  <CommandItem className="w-full text-xl font-semibold"
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
