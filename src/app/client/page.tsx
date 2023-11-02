'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Client = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/signin?callbackUrl=/client");
        },
    })
    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh]"> 
            <h1>Client</h1>
            <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="/">Voltar</Link>
        </div>
    )
}

export default Client;