"use client"
import { signIn, signOut, useSession } from "next-auth/react" //só funciona em componentes clients

const SignInButton = () => {
    return(
        <>
            <button 
                type="button"  
                className="text-white bg-blue-700 hover:bg-blue-800 focus"
                onClick={() => signIn("google")}    
            >
                    Login
            </button>
            <img 
                src="/eb-logo.svg" 
                className="w-10 h-10 rounded-full" 
                alt="img login"
            />
        </>
    )
}

export default SignInButton;