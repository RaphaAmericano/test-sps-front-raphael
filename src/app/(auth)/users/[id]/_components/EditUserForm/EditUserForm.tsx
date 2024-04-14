"use client"

import { useRef } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"

import schema from "./EditUserForm.schema"
import type { EditUserValidationSchema } from "./EditUserForm.schema"
import {  CardDescription, CardHeader, CardContent, CardFooter, Card, CardTitle } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { editUserFormAction } from "@/actions/editUserForm"
import { useFormState } from "react-dom"
import AlertComponent from "@/components/AlertComponent/AlertComponent"

type EditUserFormProps = EditUserValidationSchema

function EditUserForm(props:EditUserFormProps){
    const [editUserFormActionState, formAction] = useFormState(editUserFormAction, {
        message: "",
    })

    const form = useForm<EditUserValidationSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            id:props.id,
            email: props.email,
            name: props.name,
            password: props.password,
            type: props.type,
            ...(editUserFormActionState?.fields ?? {})
        }
    })
    const { handleSubmit, control, getValues } = form;

    const formRef = useRef<HTMLFormElement>(null)

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
                        formData.append("id", props.id!)
                        formData.append("type", type!)
                        formAction(formData)
                    })(e)
                }}
                >
                <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Edição de Usuário</CardTitle>
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
                        name="password"
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
                        render={( { field }) => {
                          const { value, onChange } = field
                          return (
                          <div className="space-y-2">
                            <Label>Tipo</Label>
                            <Select value={value} onValueChange={onChange} >
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
                    {editUserFormActionState.message && (
                      <div className="space-y-2">
                        <AlertComponent message={editUserFormActionState.message} type={editUserFormActionState.message === "Usuário editado com sucesso." ? "default" : "destructive"} />
                      </div>)}
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