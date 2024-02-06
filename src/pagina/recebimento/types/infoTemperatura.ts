import { z } from "zod";

export const FormInfoTemperatura = z.object({
	temperatura: z.number()
});

export type IInfoTemperatura = z.infer<typeof FormInfoTemperatura>