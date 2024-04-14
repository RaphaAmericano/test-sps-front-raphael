import type { NextAuthOptions } from "next-auth"
import { authUser } from "@/actions/authUser"
import { redirect } from "next/navigation"
import CredentialsProvider from "next-auth/providers/credentials"

export const options:NextAuthOptions = {
    providers: [      
        CredentialsProvider({
            name: "credentials",
            credentials:{
                email: { label: "email", type: "text"},
                password: { label: "password", type:"password"}
            },
            async authorize(credentials, req){
                if(!credentials?.email || !credentials?.password) return null; 
                const { email, password } = credentials;
                const response = await authUser({ email, password });
                if(response.message === "Usuário não autenticado") return null
                const { data: { email:authEmail, password:authPassword, ...props} } = response;
                return {
                    email:authEmail,
                    ...props
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log({ token, user })
            // if(user) return {...token, ...user }
            return token
        },
        async session({ session, token, user }) {
            console.log({ session, token, user })
            // session.user = token.user 
            return session
        },
    }
}