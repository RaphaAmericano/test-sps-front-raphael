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
export default function UserNotFound(){
    return  <div className="h-screen flex flex-col items-center justify-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Erro!</CardTitle>
                        <CardDescription>Usuário não encontrado</CardDescription>
                    </CardHeader>
                    <CardContent>
                            
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href="/users">Voltar para lista de usuários</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>    
}

