import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "./options";
export function auth(...args:[GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []){
    return getServerSession(...args, options)
}


export async function getServerSideProps(context:any){
    const session = await getServerSession(context.req, context.res, options)

    console.log(session)

}