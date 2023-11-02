"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import {FaGoogle} from 'react-icons/fa6'
 //só funciona em componentes clients

const SignInGoogle = () => {

    const { data: session } = useSession();

    console.log(session?.user)

    return (
        <>
            {session ? (<>
                <div className="flex items-center justiify-center space-x-2">
                    <div className="flex flex-col">
                        <span>{session?.user?.name}</span>
                        {/* <span>{session?.user?.email}</span> */}
                    </div>
                    <img
                        src={session?.user?.image || ''}
                        className="w-10 h-10 rounded-full"
                        alt="img login"
                    />
                    <div className="flex flex-col">
                        <button
                            type="button"
                            className="text-blue-600  hover:text-white bg-white flex items-center hover:bg-blue-800 px-2 py-2 rounded-lg"
                            onClick={() => signOut()}
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </>) : (
                <>
                    <button
                        type="button"
                        className="text-blue-600  hover:text-white bg-white flex items-center hover:bg-blue-800 px-2 py-2 rounded-lg"
                        onClick={() => signIn("google")}
                    >
                       <span className="mr-2">Entrar com google</span>
                       <FaGoogle className="" size={20} /> 
                    </button>
                </>
            )}


        </>
    )
}

export default SignInGoogle;