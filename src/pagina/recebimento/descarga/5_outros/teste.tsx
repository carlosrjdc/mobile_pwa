"use client"

import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


const schema = z.object({
  name: z.string(),
  age: z.number().min(2, {
    message:"erro",
  }),
  teste: z.any()
})


type Schema = z.infer<typeof schema>


export default function TesteFinal() {
  const { register, handleSubmit ,formState: { errors },} = useForm<Schema>({
    resolver: zodResolver(schema),
  })


  const onSubmit = (data: Schema) => {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input type="number"  {...register("age", { valueAsNumber: true })} />
      <ErrorMessage errors={errors} name="age" render={({ message }) => <p>{message}</p>} />
      <input type="submit" />
    </form>
  )
}