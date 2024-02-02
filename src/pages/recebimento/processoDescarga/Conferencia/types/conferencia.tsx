import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const FormSchema = z.object({
	sku: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	lote: z.string().min(2, {
		message: "Doca must be at least 2 characters.",
	}),
	quantidade: z.number()
});



