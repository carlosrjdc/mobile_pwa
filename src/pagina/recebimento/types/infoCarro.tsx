import { z } from "zod";

export const FormInfoCarro = z.object({
    Ocr: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    Doca: z.string().min(2, {
      message: "Doca must be at least 2 characters.",
    }),
    Placa: z.string().length(7, {
      message: "Placa must be 7 characters.",
    }),
    Lacre: z.string().min(3, {
      message: "Lacre must be 3 characters.",
    }),
    Foto: z.instanceof(File)
  });

  export type IInfoCarro = z.infer<typeof FormInfoCarro>