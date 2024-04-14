"use client"

import { useRef } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"

import schema from "./EditUserForm.schema"
import type { EditUserValidationSchema } from "./EditUserForm.schema"
import {  CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { loginFormAction } from "@/actions/loginForm"
import { useFormState } from "react-dom"

type EditUserFormProps = EditUserValidationSchema

function EditUserForm(props:EditUserFormProps){

    const [loginFormActionState, formAction] = useFormState(loginFormAction, {
        message: "",
    })

    const form = useForm<EditUserValidationSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: props.email,
            name: props.name,
            password: props.password,
            type: props.type,
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
            {/* <CardTitle>Cadastro de Usuário</CardTitle> */}
            <CardDescription>Preencha os campos para atualizar o cadastro do usuário.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Controller 
                  control={control}
                  name="name"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label>Nome</Label>
                      <Input placeholder="João" {...field } />
                    </div>
                  )}
                />
                <Controller 
                  control={control}
                  name="email"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input placeholder="colaborador@sps.group.com.br" {...field} type="email" />
                    </div>

                  )}
                />
                
              </div>
              <Controller 
                  control={control}
                  name="email"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label>Password</Label>
                      <Input {...field} type="password" />
                    </div>

                  )}
                />
              <Controller 
                  control={control}
                  name="type"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo</Label>
                      <Select {...field}>
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

                  )}
                />              
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Editar Usuário
            </Button>
          </CardFooter>
        </Card>

            </form>

        </FormProvider>
    )
}

export default EditUserForm