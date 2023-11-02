import { redirect } from "next/navigation";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { authOption } from "../api/auth/[...nextauth]/route";

const ServerPage = async () => {
    const session = await getServerSession(authOption);
    console.log(session)
    if(!session) redirect("/signin?callbackUrl=/server");
    return (
        <>
            <h1>Server</h1>
            <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="/">Voltar</Link>
        </>
    )
}

export default ServerPage;