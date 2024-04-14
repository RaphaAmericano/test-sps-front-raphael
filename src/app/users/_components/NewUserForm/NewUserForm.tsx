"use client"

import { useRef } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"

import schema from "./NewUserForm.schema"
import type { NewUserValidationSchema } from "./NewUserForm.schema"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import InputFeedback from "@/components/InputFeeback"
import EyeIcon from "@/components/icons/EyeIcon"
import { loginFormAction } from "@/actions/loginForm"
import { useFormState } from "react-dom"

function NewUserForm(){

    const [loginFormActionState, formAction] = useFormState(loginFormAction, {
        message: "",

    })

    const form = useForm<NewUserValidationSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            email:"",
            password: "",
            ...(loginFormActionState?.fields ?? {})
        }
    })
    const { handleSubmit, control } = form;

    const formRef = useRef<HTMLFormElement>(null)

    return (
        <FormProvider {...form}>
            <form 
                ref={formRef}
                action={formAction}  
                onSubmit={ (e) => {
                    e.preventDefault()
                    handleSubmit(() => {
                        formAction(new FormData(formRef.current!))
                    })(e)
                }}
                >
                <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Cadastro de Usuário</CardTitle>
            <CardDescription>Preencha os campos para cadastrar um novo usuário.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tipos</SelectLabel>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="user">Usuário</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Criar Usuário
            </Button>
          </CardFooter>
        </Card>

            </form>

        </FormProvider>
    )
}

export default NewUserForm