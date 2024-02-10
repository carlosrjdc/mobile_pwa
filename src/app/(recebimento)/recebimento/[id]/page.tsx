/** @format */

"use client";
import Descarga from "@/pagina/recebimento/descarga";
import { useParams } from "next/navigation";

export default function DescargaPage() {
  const params = useParams();
  console.log(params?.id);
  return (

      <Descarga />

  );
}
