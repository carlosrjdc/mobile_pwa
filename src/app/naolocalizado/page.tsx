'use client'

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function NaoLocalizado(){
    return <div>
        <Button onClick={()=> signOut()}>Logar Novamente</Button>
        nao localizado
        </div>
}