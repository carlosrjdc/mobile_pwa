
import { z } from "zod";

export const ConferenciaSchema = z.object({
	id: z.string(),
	idPallet: z.string().min(4, {
		message: "Minimo de 4 caracter",
		
	}),
	sku: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	lote: z.string().min(2, {
		message: "Doca must be at least 2 characters.",
	}),
	quantidade: z.number()
});

export type ISku = z.infer<typeof	ConferenciaSchema>