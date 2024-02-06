/** @format */

"use client";
import InfoPlacaOcr from "../7_globals/infoPlacaOcr";
import FormularioInfoTemperatura from "./form";

export default function InfoTemperatura() {


  return (
    <div className="flex flex-col min-h-screen">
              <InfoPlacaOcr/>
      <div className="p-2 flex flex-1">
        <FormularioInfoTemperatura/>
      </div>
    </div>
  );
}
