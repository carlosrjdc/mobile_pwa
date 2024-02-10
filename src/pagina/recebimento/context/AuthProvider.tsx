"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function ProvedorAutenticacao({children}:{children:ReactNode}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
