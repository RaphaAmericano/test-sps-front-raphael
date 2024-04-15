import type { NextAuthOptions } from "next-auth"
import { authUser } from "@/actions/authUser"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
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
                cookies().set("token", props.token)
                    
                return {
                    email:authEmail,
                    ...props
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) return {...token, ...user }
            return token
        },
        async session({ session, token, user }) {
            // session.user = token.user 
            if(session.user) return { ...session, ...token, user:token}
            return session
        },
    },
    pages:{
        signIn:"/"
    },
    events: {
        async signOut() {
            cookies().delete("token")
        },
        async signIn(props){
            console.log(props)
            console.log("/signin", "push")
        }
    }
}