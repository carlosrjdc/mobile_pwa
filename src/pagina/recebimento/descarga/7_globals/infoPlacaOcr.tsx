'use client'

import { Label } from "@/components/ui/label";
import useInfoCarStore from "../../states/recebimentoState";

export default function InfoPlacaOcr() {
  const infoCarro = useInfoCarStore((state)=> state.infoCarro)

  return (
    <div>
      <div className="flex justify-center py-2 bg-secondary-foreground">
        <Label className="font-bold uppercase text-secondary">
          OCR:{infoCarro.ocr} | Placa:{infoCarro.placa}{" "}
        </Label>
      </div>
    </div>
  );
}
