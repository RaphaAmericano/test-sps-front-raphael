"use client"
import { useSession } from "next-auth/react"
import LoginForm from "./_components/LoginForm/LoginForm"
import { redirect } from "next/navigation"
export default function Login() {
  const session = useSession()

  if(session.status === "authenticated"){
    redirect("/home")
  } 

  return (
    <main className="flex items-center justify-center h-screen">
      <LoginForm />
    </main>
  )
}

