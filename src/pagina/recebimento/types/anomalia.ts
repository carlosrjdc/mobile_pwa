
import { z } from "zod";

export const AnomaliaSchema = z.object({
	localVeiculoAvaria:z.string(),
	localPalletAvaria:z.string(),
	origemNConformidade: z.string(),
	naturezaNConformidade: z.string(),
	tipoNConformidade: z.string(),
	causaNConformidade: z.string()
});

export type IAnomalia = z.infer<typeof	AnomaliaSchema>