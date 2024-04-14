"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthHome() {
    const { status } = useSession()
    console.log(status)
    if(status === "unauthenticated"){
        redirect("/login")
    }
    useEffect(() => {
      console.log("(auth) page")
      console.log(status)
    },[status])
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      </main>
    );
  }
  