"use client";

import { useUserState } from "@/pagina/stateUser";
import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function VerificarStatus({ children }: { children: ReactNode }) {
  const session = useSession();

  const router = useRouter()
  const ADD_USER = useUserState((state)=> state.UPDATE_USER)
  



  useEffect(() => {
    sessaoProvider();
  }, [session]);

  async function sessaoProvider() {
   /* if (session.status === "loading") {
      return <div>Loading...</div>;
    }

    if (session.status === "unauthenticated") {
      return signIn("keycloak");
    }*/

    if (session.status === "authenticated") {

        //@ts-ignore
        const token = await jwt.decode(session.data.token)

        if(token){
            //@ts-ignore
            console.log(token)
             //@ts-ignore
            if(!(token.grupos)){
                console.log("nao tm grupo")
                router.push("/naolocalizado")
                return <div>vc nao ta associado a nenhum unidade buscar adm</div>
            }
        }
        
        //@ts-ignore
        ADD_USER({token:session.data.token,  nome:session.data.user?.name})
        //@ts-ignore

      //console.log({autenticado: session.data.token})
    }
  }

  return <div>{children}</div>;
}
