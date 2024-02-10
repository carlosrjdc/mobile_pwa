"use client"

import { Button } from "@/components/ui/button"
import 'next-auth/react'
import { signIn, signOut, useSession } from "next-auth/react"


export default function TelaLogin(){

    const session = useSession()
    console.log(session)
    

    return <div>
        <Button onClick={()=> signIn("keycloak", {callbackUrl:"/"})}>Login</Button>
        <Button onClick={()=> signOut()}>Deslogar</Button>
        Tela Login
    </div>
}