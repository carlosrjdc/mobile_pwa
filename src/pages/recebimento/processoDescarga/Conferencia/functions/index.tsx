import { z } from "zod";
import { FormSchema } from "../types/conferencia";
import { toast } from "@/components/ui/use-toast";

export function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
        title: "You submitted the following values:",
        description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    });
}