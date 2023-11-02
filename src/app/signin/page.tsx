import SignInButton from "@/components/SignInButton";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh]"> 
        <h1>Client </h1>
        <SignInButton />
        <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="/">Voltar para Home</Link>
    </div>
    )
}

export default SignInPage;