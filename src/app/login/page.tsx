"use client"
import { useSession } from "next-auth/react"
import LoginForm from "./_components/LoginForm/LoginForm"
import { redirect } from "next/navigation"
import { useEffect } from "react"
export default function Login() {
  const { status } = useSession()
  useEffect(() => {
    console.log(status)
    if(status === "authenticated"){
      redirect("/home")
    } 
  },[status])

  return (
    <main className="flex items-center justify-center h-screen">
      <LoginForm />
    </main>
  )
}

