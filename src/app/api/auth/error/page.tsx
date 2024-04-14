import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function AuthError(){
    return  <div className="h-screen flex flex-col items-center justify-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Erro!</CardTitle>
                        <CardDescription>Ocorreu um erro ao tentar logar. Retorne e tente novamente.</CardDescription>
                    </CardHeader>
                    <CardContent>
                            
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href="/login">Voltar ao login</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>    
}

