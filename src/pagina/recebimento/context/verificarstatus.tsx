"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function VerificarStatus({ children }: { children: ReactNode }) {
  const session = useSession();
  useEffect(() => {
    sessaoProvider();
  }, [session]);

  async function sessaoProvider() {
   /* if (session.status === "loading") {
      return <div>Loading...</div>;
    }

    if (session.status === "unauthenticated") {
      return signIn("keycloak");
    }

    if (session.status === "authenticated") {
      return <div>{children}</div>;
    }*/
  }

  return <div>{children}</div>;
}
