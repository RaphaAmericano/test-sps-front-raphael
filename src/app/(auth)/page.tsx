"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthHome() {
    const { status } = useSession()
    console.log(status)
    if(status === "unauthenticated"){
        redirect("/login")
    }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      </main>
    );
  }
  