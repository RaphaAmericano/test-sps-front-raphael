"use client"

import { useRef } from "react"
import { signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"

import schema from "./LoginForm.schema"
import type { LoginValidationSchema } from "./LoginForm.schema"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import InputFeedback from "@/components/InputFeeback"
import EyeIcon from "@/components/icons/EyeIcon"

function LoginForm(){
    
    const form = useForm<LoginValidationSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            email:"",
            password: "/home",
        }
    })
    const { handleSubmit, control } = form;

    const formRef = useRef<HTMLFormElement>(null)
    async function formSubmit(formData: LoginValidationSchema){
        await signIn("credentials", {
            ...formData,
            callbackUrl:"/home"
        })
    }
    return (
        <FormProvider {...form}>
            <form 
                ref={formRef}
                // action={formAction}  
                onSubmit={ (e) => {
                    e.preventDefault()
                    handleSubmit(() => {
                        const formData = Object.fromEntries(new FormData(formRef.current!)) as LoginValidationSchema
                        formSubmit(formData)
                    })(e)
                }}
                >
                <Card className="px-0">
                    <CardHeader>
                        <CardTitle className="text-3xl">Login</CardTitle>
                        <CardDescription>Preencha seu email e senha para entrar na plataforma.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">

                        <div className="space-y-6">
                            <Controller
                            control={control}
                            name="email"
                            render={({field }) => (
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input className="w-[400px]" {...field} placeholder="usuario@sps.group.com" />
                                    <InputFeedback text="Preencha seu email" />
                                </div>
                            )}
                            />
                            <Controller 
                                control={control}
                                name="password"
                                render={({field }) => (
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input {...field} type="password" />
                                        <InputFeedback text="Preencha sua senha." icon={<EyeIcon className="w-4 h-4 opacity-50" />} />
                                    </div>
                                )}
                            />
                            
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" >Login</Button>
                    </CardFooter>
                </Card>

            </form>

        </FormProvider>
    )
}

export default LoginForm