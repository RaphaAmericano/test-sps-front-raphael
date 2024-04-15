"use client"

import { useEffect, useRef } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"

import schema from "./NewUserForm.schema"
import type { NewUserValidationSchema } from "./NewUserForm.schema"
import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { newUserFormAction } from "@/actions/newUserForm"
import { useFormState } from "react-dom"
import AlertComponent from "@/components/AlertComponent/AlertComponent"

const initialValues:NewUserValidationSchema = {
  email:"",
  password: "",
  name: "",
  type: "user"
}

function NewUserForm(){
    const [newUserFormActionState, formAction] = useFormState(newUserFormAction, {
        message: "",
    })

    const form = useForm<NewUserValidationSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            ...initialValues,
            ...(newUserFormActionState?.fields ?? {})
        }
    })
    const { handleSubmit, control, getValues, reset } = form;

    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
      if(newUserFormActionState.message === "Usuário criado com sucesso."){
        reset(initialValues)
      }
    }, [newUserFormActionState.message, reset])

    return (
        <FormProvider {...form}>
            <form 
                ref={formRef}
                action={formAction}  
                onSubmit={ (e) => {
                    e.preventDefault()
                    handleSubmit(() => {
                      const formData = new FormData(formRef.current!)
                      const type = getValues("type")
                      formData.append("type", type)
                      formAction(formData)
                    })(e)
                }}
                >
                <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardDescription>Preencha os campos para cadastrar um novo usuário.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Controller 
                  control={control}
                  name="name"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" required placeholder="João" {...field } />
                    </div>
                  )}
                />
                <Controller 
                  control={control}
                  name="email"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="usuario@spsgroup.com.br" required {...field }  />
                    </div>
                  )}
                />  
              </div>
              <Controller 
                  control={control}
                  name="password"
                  render={( { field }) => (
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" {...field } />
                    </div>
                  )}
                />
                <Controller 
                  control={control}
                  name="type"
                  render={( { field }) => {
                    const { value, onChange} = field
                    return (
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo</Label>
                      <Select required value={value} onValueChange={onChange} >
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
                  )}}
                />
                 {newUserFormActionState.message && (
                    <div className="space-y-2">
                        <AlertComponent message={newUserFormActionState.message} type={newUserFormActionState.message === "Usuário criado com sucesso." ? "default" : "destructive"} />
                    </div>
                  )}
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