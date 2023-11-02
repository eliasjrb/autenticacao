"use client"
import { signIn, signOut, useSession } from "next-auth/react" //só funciona em componentes clients

const SignInButton = () => {

    const { data: session } = useSession();

    console.log(session?.user)

    return (
        <>
            {session ? (<>
                <div className="flex items-center justiify-center space-x-2">
                    <div className="flex flex-col">
                        <span>{session?.user?.name}</span>
                        <span>{session?.user?.email}</span>
                    </div>
                    <img
                        src={session?.user?.image || ''}
                        className="w-10 h-10 rounded-full"
                        alt="img login"
                    />
                    <div className="flex flex-col">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg "
                            onClick={() => signOut()}
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </>) : (
                <>
                    <img
                        src="/eb-logo.svg"
                        className="w-10 h-10 rounded-full"
                        alt="img login"
                    />
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                        onClick={() => signIn("google")}
                    >
                        Entrar
                    </button>
                </>
            )}


        </>
    )
}

export default SignInButton;