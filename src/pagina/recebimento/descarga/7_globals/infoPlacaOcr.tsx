'use client'

import { Label } from "@/components/ui/label";
import { useRecebimentoContext } from "../../context/contextRecebimento";

export default function InfoPlacaOcr() {
  const { state, dispatchPage } = useRecebimentoContext();
  return (
    <div>
      <div className="flex justify-center py-2 bg-cyan-500">
        <Label className="font-bold uppercase ">
          OCR:{state.ocr} | Placa:{state.placa}{" "}
        </Label>
      </div>
    </div>
  );
}
